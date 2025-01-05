# Multiplayer Ping Pong Game with Dynamic Obstacles

Welcome to our **Multiplayer Ping Pong Game with Dynamic Obstacles**! This is a fun, interactive, and challenging take on the classic ping pong game, designed for two players. The addition of dynamic obstacles adds an exciting twist to the gameplay, ensuring every match feels unique and thrilling.

## Features
- **Dynamic Obstacles**: Randomly appearing obstacles make the game more unpredictable and engaging.
- **Multiplayer Mode**: Two players can compete against each other on the same device.
- **Responsive Design**: Smooth gameplay experience on different devices and screen sizes.
- **Fast API Integration**: Backend support for enhanced performance and additional features.
- **Clean and Minimalistic UI**: Designed using HTML, CSS, and JavaScript for a visually pleasing interface.

---

## Tools and Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: FastAPI
- **Game Logic**: Implemented with JavaScript

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

## Installation
Follow these steps to set up and run the game on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/vishnukoushikN0717/GigaML.git
   ```

2. Navigate to the project directory:
   ```bash
   cd multiplayer-ping-pong
   ```

3. Install required dependencies for the backend:
   ```bash
   pip install fastapi uvicorn
   ```

4. Run the backend server:
   ```bash
   uvicorn main:app --reload
   ```

5. Open the `index.html` file in your browser to start the game.

---

## Folder Structure
```
multiplayer-ping-pong/
├── backend/
│   ├── main.py          # FastAPI backend code
│   ├── ...              # Other backend files
├── frontend/
│   ├── index.html       # Main game interface
│   ├── style.css        # Stylesheet
│   ├── script.js        # Game logic
├── README.md            # Documentation
```

---

## Contributing
We welcome contributions to make the game even better! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch.
3. Commit your changes and push the branch.
4. Submit a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
Thank you for trying out our game! We hope you enjoy it. Feel free to share your feedback or report any issues on the [issues page](https://github.com/vishnukoushikN0717/GigaML/issues).

---

### Happy Gaming!



# Multiplayer Ping Pong Game with Dynamic Obstacles

This project is a real-time multiplayer ping pong game with dynamic obstacles, built using React for the frontend and Flask for the backend. Players can compete across different browser tabs, with real-time updates via WebSockets.

---

## Features

- **Two-Player Gameplay**: Control paddles using keyboard inputs (`W/S` for Player 1, `Arrow Up/Down` for Player 2).
- **Dynamic Obstacles**: Two obstacles randomly placed on the field, causing the ball to bounce on collision.
- **Real-Time Synchronization**: Game state is synchronized across browser tabs using WebSockets.
- **Scoring System**: Tracks and displays scores for both players.

---

## Prerequisites

- [Node.js](https://nodejs.org/) for the frontend.
- [Python](https://www.python.org/) for the backend.

---

## Frontend Setup (React)

1. **Install Node.js**  
   Download and install [Node.js](https://nodejs.org/).

2. **Create React App**  
   Open a terminal and run:
   ```bash
   npx create-react-app ping-pong-game
   cd ping-pong-game
   ```

3. **Add the Provided Code**  
   - Replace the content of `src/App.js` with the provided React frontend code.
   - Create a `src/App.css` file and add the required CSS code.

4. **Install Dependencies**  
   Run the following command to install dependencies:
   ```bash
   npm install
   ```

5. **Start the React App**  
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
   source venv/bin/activate  # On Windows: venv\Scripts\activate
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




