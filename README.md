🟩 Wordle Clone (React + TypeScript)

A simple, interactive Wordle clone built using React and JavaScript (with TypeScript typings).
This project replicates the popular daily word guessing game, allowing users to guess a random 5-letter word within 6 tries.


🧠 Features
  🎮   Play a 6-round word guessing game
  ⌨️   Keyboard input for letters, backspace, and enter
  🟨   Letter feedback (correct position, wrong position, not in word)
  🔁   “Try Again” button to restart with a new random word
  💡   “Show Answer” button for revealing the correct word
  ⚡   Random word generation from a local words.js file


🛠️ Tech Stack
  React (functional components, hooks)
  JavaScript (ES6+)
  CSS for styling
  Vite for fast development and build
  TypeScript hints for type safety in logic functions

📸 Preview

![Wordle Screenshot](./assets/[wordleDemo](./assets/wordleDemo.png)

---

📂 Project Structure
📦 wordle-clone
├── src/
│   ├── components/
│   │   └── Line.jsx       # Displays each guess row
│   ├── words.js           # Contains the word list
│   ├── App.jsx            # Main game logic
│   ├── App.css            # Styling
│   └── main.jsx           # Entry point
├── public/
│   └── assets/            # Images (preview, icons, etc.)
├── package.json
└── README.md


  If the guess matches the word, the game ends with a win message.
  The player can reveal the answer or try again at any time.
