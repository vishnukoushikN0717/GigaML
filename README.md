# Multiplayer Ping Pong Game 

This project is a real-time multiplayer ping pong game, built using React for the frontend and Flask for the backend. Players can compete across different browser tabs, with real-time updates via WebSockets.

---

## Features
- **Two-Player Gameplay**: Control paddles using keyboard inputs (`W/S` for Player 1, `Arrow Up/Down` for Player 2).
- **Real-Time Synchronization**: Game state is synchronized across browser tabs using WebSockets.
- **Scoring System**: Tracks and displays scores for both players.
- **Responsive Design**: Smooth gameplay experience on different devices and screen sizes.
- **Fast API Integration**: Backend support for enhanced performance and additional features.

---

## Tools and Technologies Used
- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Flask, FastAPI
- **WebSockets**: Real-time communication

---

## How to Play
### Controls:
#### Player 1 (Left Paddle):
- Press **W** key to move the paddle up.
- Press **S** key to move the paddle down.

#### Player 2 (Right Paddle):
- Press **Up Arrow** key to move the paddle up.
- Press **Down Arrow** key to move the paddle down.

### Objective:
- Hit the ball past your opponent's paddle to score a point.
- Avoid obstacles that may redirect the ball or block your paddle.
- First player to reach the winning score wins the match.

---

## Prerequisites
- [React.js]for the frontend.
- [Python](https://www.python.org/) for the backend.

---

## Frontend Setup (React)
1. **Install Node.js**  
   Download and install [Node.js](https://nodejs.org/).

2. **Clone the Repository**  
   ```bash
   git clone https://github.com/vishnukoushikN0717/GigaML.git
   cd GigaML
   ```

3. **Create React App**  
   Open a terminal and run:
   ```bash
   npx create-react-app ping-pong-game
   cd ping-pong-game
   ```

4. **Add the Provided Code**  
   - Replace the content of `src/App.js` with the provided React frontend code.
   - Create a `src/App.css` file and add the required CSS code.

5. **Install Dependencies**  
   Run the following command to install dependencies:
   ```bash
   npm install
   ```

6. **Start the React App**  
   Start the React development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

---

## Backend Setup (Flask)
1. **Install Python**  
   Download and install [Python](https://www.python.org/).

2. **Set Up a Virtual Environment**  
   Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: source venv/Scripts/activate
   ```

3. **Install Required Libraries**  
   Install Flask and Flask-Sock:
   ```bash
   pip install flask flask-sock
   ```

4. **Add the Backend Code**  
   Create a file named `app.py` and paste the provided Flask backend code into it.

5. **Run the Flask Server**  
   Start the backend server:
   ```bash
   python app.py
   ```
   The backend will be available at `http://localhost:5000`.

---

## Testing the Application
1. **Start the Flask Backend**  
   Open a terminal, navigate to the backend folder, and run:
   ```bash
   python app.py
   ```

2. **Start the React Frontend**  
   Open a second terminal, navigate to the React project folder, and run:
   ```bash
   npm start
   ```

3. **Open Two Browser Tabs**  
   Navigate to `http://localhost:3000` in two separate browser tabs. Each tab represents a player.

4. **Verify WebSocket Connection**  
   Ensure that paddle movements and game state are synchronized between the tabs.

---

## Key Files
### Frontend
- `src/App.js`: React application logic for rendering the game and handling WebSocket communication.
- `src/App.css`: Styles for the game.

### Backend
- `app.py`: Flask backend for managing game state and WebSocket communication.

---

## Known Issues
- The game currently does not handle reconnections after WebSocket disconnection.
- Minor lag may occur if network latency is high.

---

## Future Improvements
- Add a better UI/UX design.
- Handle reconnections and player disconnection gracefully.
- Enhance collision detection for smoother gameplay.

---

## License
This project is licensed under the MIT License.

---

### Happy Gaming!

