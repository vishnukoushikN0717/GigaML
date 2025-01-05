import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [gameState, setGameState] = useState({
    paddle1: { x: 10, y: 250 },
    paddle2: { x: 780, y: 250 },
    ball: { x: 400, y: 300, radius: 10 },
    score: { player1: 0, player2: 0 },
    gameStarted: false
  });
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);
  const [keys, setKeys] = useState({ w: false, s: false, ArrowUp: false, ArrowDown: false });
  const [winner, setWinner] = useState(null);
  const WINNING_SCORE = 5;

  // WebSocket connection setup
  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:5000/game');

    newSocket.onopen = () => {
      console.log('Connected to game server');
      setConnected(true);
    };

    newSocket.onmessage = (event) => {
      const updatedGameState = JSON.parse(event.data);
      setGameState(updatedGameState);

      // Check for winner
      if (updatedGameState.gameStarted) {
        if (updatedGameState.score.player1 >= WINNING_SCORE) {
          setWinner('Player 1');
          newSocket.send(JSON.stringify({ type: 'gameEnd' }));
          updatedGameState.gameStarted = false;
        } else if (updatedGameState.score.player2 >= WINNING_SCORE) {
          setWinner('Player 2');
          newSocket.send(JSON.stringify({ type: 'gameEnd' }));
          updatedGameState.gameStarted = false;
        }
      }
    };

    newSocket.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    newSocket.onclose = () => {
      console.log('Disconnected from game server');
      setConnected(false);
    };

    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, []);

  // Start game function
  const startGame = useCallback(() => {
    if (socket && connected) {
      setWinner(null);
      socket.send(JSON.stringify({ type: 'start' }));
    }
  }, [socket, connected]);

  // Reset game function
  const resetGame = useCallback(() => {
    if (socket && connected) {
      setWinner(null);
      socket.send(JSON.stringify({ type: 'reset' }));
    }
  }, [socket, connected]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (keys.hasOwnProperty(e.key) && connected) {
        e.preventDefault();
        setKeys((prevKeys) => ({ ...prevKeys, [e.key]: true }));
        socket?.send(JSON.stringify({ key: e.key, pressed: true }));
      }
    };

    const handleKeyUp = (e) => {
      if (keys.hasOwnProperty(e.key) && connected) {
        e.preventDefault();
        setKeys((prevKeys) => ({ ...prevKeys, [e.key]: false }));
        socket?.send(JSON.stringify({ key: e.key, pressed: false }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [socket, keys, connected]);

  // Drawing function
  const draw = useCallback((ctx) => {
    // Clear canvas
    ctx.clearRect(0, 0, 800, 600);

    // Draw center line
    ctx.setLineDash([5, 15]);
    ctx.beginPath();
    ctx.moveTo(400, 0);
    ctx.lineTo(400, 600);
    ctx.strokeStyle = '#00ff00';
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw paddles
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(gameState.paddle1.x, gameState.paddle1.y, 10, 100);
    ctx.fillRect(gameState.paddle2.x, gameState.paddle2.y, 10, 100);

    // Draw ball with glow effect
    ctx.beginPath();
    ctx.arc(gameState.ball.x, gameState.ball.y, gameState.ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#00ff00';
    ctx.shadowColor = '#00ff00';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.closePath();
    ctx.shadowBlur = 0;

    // Draw scores
    ctx.font = '24px "Press Start 2P"';
    ctx.fillStyle = '#00ff00';
    ctx.shadowColor = '#00ff00';
    ctx.shadowBlur = 5;
    ctx.fillText(`${gameState.score.player1}`, 350, 50);
    ctx.fillText(`${gameState.score.player2}`, 430, 50);
    ctx.shadowBlur = 0;
  }, [gameState]);

  // Canvas rendering
  useEffect(() => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    draw(ctx);
  }, [gameState, draw]);

  return (
    <div className="App">
      {!gameState.gameStarted && !winner && connected && (
        <button onClick={startGame} className="start-button">
          Start Game
        </button>
      )}

      {winner && (
        <div className="game-over visible">
          <h2>{winner} Wins!</h2>
          <button onClick={resetGame} className="reset-button">
            Play Again
          </button>
        </div>
      )}

      <canvas id="gameCanvas" width="800" height="600"></canvas>

      <div className="player1-controls instructions">
        Player 1<br />
        W - Up<br />
        S - Down
      </div>

      <div className="player2-controls instructions">
        Player 2<br />
        ↑ - Up<br />
        ↓ - Down
      </div>

      <div className="controls-info">
        First to {WINNING_SCORE} points wins!
      </div>

      {!connected && (
        <div className="connection-error">
          Connecting to server...
        </div>
      )}
    </div>
  );
}

export default App;
