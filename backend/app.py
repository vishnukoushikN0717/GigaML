from flask import Flask
from flask_sock import Sock
import json
import threading
import time

app = Flask(__name__)
sock = Sock(app)

# Game state
state = {
    "paddle1": {"x": 10, "y": 250, "width": 10, "height": 100},
    "paddle2": {"x": 780, "y": 250, "width": 10, "height": 100},
    "ball": {"x": 400, "y": 300, "radius": 10, "dx": 5, "dy": 5},
    "score": {"player1": 0, "player2": 0},
    "keys": {"ArrowUp": False, "ArrowDown": False, "w": False, "s": False},
    "gameStarted": False
}

def reset_ball():
    ball = state["ball"]
    ball["x"] = 400
    ball["y"] = 300
    ball["dx"] = 5 if ball["dx"] < 0 else -5
    ball["dy"] = 5

def update_state():
    while True:
        if state["gameStarted"]:
            # Move paddles
            if state["keys"]["w"] and state["paddle1"]["y"] > 0:
                state["paddle1"]["y"] -= 5
            if state["keys"]["s"] and state["paddle1"]["y"] < 500:
                state["paddle1"]["y"] += 5
            if state["keys"]["ArrowUp"] and state["paddle2"]["y"] > 0:
                state["paddle2"]["y"] -= 5
            if state["keys"]["ArrowDown"] and state["paddle2"]["y"] < 500:
                state["paddle2"]["y"] += 5

            # Move ball
            ball = state["ball"]
            ball["x"] += ball["dx"]
            ball["y"] += ball["dy"]

            # Ball collisions with walls
            if ball["y"] <= 0 or ball["y"] >= 600:
                ball["dy"] *= -1

            # Ball collisions with paddles
            p1 = state["paddle1"]
            p2 = state["paddle2"]
            
            # Paddle 1 collision
            if (ball["x"] - ball["radius"] <= p1["x"] + p1["width"] and
                ball["y"] >= p1["y"] and
                ball["y"] <= p1["y"] + p1["height"]):
                ball["dx"] *= -1
                ball["x"] = p1["x"] + p1["width"] + ball["radius"]

            # Paddle 2 collision
            if (ball["x"] + ball["radius"] >= p2["x"] and
                ball["y"] >= p2["y"] and
                ball["y"] <= p2["y"] + p2["height"]):
                ball["dx"] *= -1
                ball["x"] = p2["x"] - ball["radius"]

            # Scoring
            if ball["x"] < 0:
                state["score"]["player2"] += 1
                reset_ball()
            elif ball["x"] > 800:
                state["score"]["player1"] += 1
                reset_ball()

        time.sleep(0.016)  # 60 FPS

@sock.route('/game')
def game(ws):
    while True:
        try:
            message = ws.receive()
            if message:
                data = json.loads(message)
                if data.get("type") == "start":
                    state["gameStarted"] = True
                    state["score"]["player1"] = 0
                    state["score"]["player2"] = 0
                    reset_ball()
                elif data.get("type") == "reset":
                    state["gameStarted"] = True
                    state["score"]["player1"] = 0
                    state["score"]["player2"] = 0
                    reset_ball()
                elif data.get("type") == "gameEnd":
                    state["gameStarted"] = False
                else:
                    key = data.get("key")
                    pressed = data.get("pressed")
                    if key in state["keys"]:
                        state["keys"][key] = pressed
            ws.send(json.dumps(state))
        except Exception as e:
            print(f"WebSocket error: {e}")
            break

# Start the game loop
thread = threading.Thread(target=update_state, daemon=True)
thread.start()

if __name__ == "__main__":
    app.run(debug=True, port=5000)