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



Setting up the code

Frontend Setup (React)
Install Node.js
Download and install Node.js.

Create React App
Run the following commands in your terminal:

bash
Copy code
npx create-react-app ping-pong-game
cd ping-pong-game
Add the Provided Code
Replace the content of src/App.js with the provided React frontend code. Create a src/App.css file and add the CSS code.

Install Dependencies
If you use WebSocket directly, no additional libraries are needed. To install optional libraries (if needed in future):

bash
Copy code
npm install
Start the React App
Run the app locally:

bash
Copy code
npm start
Access it at http://localhost:3000.

Backend Setup (Flask)
Install Python
Download and install Python.

Set Up a Virtual Environment

bash
Copy code
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate
Install Required Libraries
Install Flask and Flask-Sock:

bash
Copy code
pip install flask flask-sock
Add the Backend Code
Create a file named app.py and paste the provided Flask backend code into it.

Run the Flask Server
Start the backend server:

bash
Copy code
python app.py
The backend will run on http://localhost:5000.

Testing the Application
Start the Flask Backend
Run python app.py in one terminal window.

Start the React Frontend
Run npm start in another terminal window.

Open Two Browser Tabs
Open http://localhost:3000 in two separate browser tabs. Each tab represents a player.

Verify WebSocket Connection
The paddle movements and game state should synchronize between the two tabs.



