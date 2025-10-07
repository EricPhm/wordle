import { useState, useEffect } from "react";
import "./App.css";
import words from "./words";
import Line from "./components/line";
// const API = "https://api.frontendexpert.io/api/fe/wordle-words";

// to run: npm run dev

function App() {
    const [solution, setSolution] = useState("");
    const [guesses, setGuesses] = useState(Array(6).fill(null)); // fill in null if no guess yet
    const [currentGuess, setCurrentGuess] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);
    const [answer, setAnswer] = useState("*Answer*");

    const randomNumberInRange = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    useEffect(() => {
        const handleTypping = (event) => {
            if (isGameOver) {
                return;
            }

            if (event.key === "Backspace") {
                if (currentGuess.length < 1) {
                    return;
                }
                setCurrentGuess(currentGuess.slice(0, -1));
                return;
            }

            if (event.key === "Enter") {
                if (currentGuess.length !== 5) {
                    return;
                }
                const newGuesses = [...guesses];
                newGuesses[guesses.findIndex((val) => val == null)] =
                    currentGuess;
                setGuesses(newGuesses);
                setCurrentGuess("");

                const isCorrect = solution === currentGuess;
                if (isCorrect) {
                    setIsGameOver(true);
                }
                return;
            }

            if (currentGuess.length >= 5) {
                return;
            }

            const isLetter = event.key.match(/^[a-z]{1}$/) !== null;
            if (isLetter) {
                setCurrentGuess(currentGuess + event.key.toUpperCase());
            }
        };

        window.addEventListener("keydown", handleTypping);

        return () => window.removeEventListener("keydown", handleTypping);
    }, [currentGuess, isGameOver, solution, guesses]);

    useEffect(() => {
        setSolution(words[randomNumberInRange(0, words.length - 1)]);
    }, []);

    const handleShowAnswer = () => {
        setIsGameOver((prev) => !prev);
        setAnswer(solution);
    };

    const tryAgainBtn = () => {
        setIsGameOver(false);
        setAnswer("*Answer*");
        setCurrentGuess("");
        setGuesses(Array(6).fill(null));
        setSolution(words[randomNumberInRange(0, words.length - 1)]);
    };

    return (
        <div className="board">
            <div className="title">WORDLE</div>
            {guesses.map((guess, i) => {
                // if 1st in guesses is null then we on index 0
                const isCurrentGuess =
                    i === guesses.findIndex((val) => val == null); // find the first null row and return index

                return (
                    <Line
                        guess={isCurrentGuess ? currentGuess : guess ?? ""}
                        isFinal={!isCurrentGuess && guess != null}
                        solution={solution}
                    />
                );
            })}
            <div className="grid">
                <button className="button" onClick={handleShowAnswer}>
                    {answer}
                </button>
                <button className="button" onClick={tryAgainBtn}>
                    Try Again
                </button>
            </div>
        </div>
    );
}

export default App;
