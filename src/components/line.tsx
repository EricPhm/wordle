import "../App.css";

// is a function
function Line({ guess, isFinal, solution }) {
    const WORD_LENGTH = 5;
    const tiles = [];

    // use for loop instead of map because of null
    for (let i = 0; i < WORD_LENGTH; i++) {
        const char = guess[i];
        // const char = guess?.[i] ?? "";
        let className = "tile";
        if (isFinal) {
            if (char === solution[i]) {
                className += " correct";
            } else if (solution.includes(char)) {
                className += " partial";
            } else {
                className += "  incorrect";
            }
        }

        // push the div to array tiles for the row
        tiles.push(
            <div key={i} className={className}>
                {char}
            </div>
        );
    }

    return <div className="line">{tiles}</div>;
}

export default Line;
