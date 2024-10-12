function App() {
    // variation 1:
    // const handleClick = () => {
    //     console.log("button clicked");
    // };

    // variation 2:
    // const handleClick = function () {
    //     console.log("button clicked");
    // };
    return (
        <div>
            {/* <button onClick={handleClick}>Add Animal</button> */}
            {/** variation 3: */}
            {/* <button
                onClick={function () {
                    console.log("button clicked");
                }}
            >
                Add Animal
            </button> */}

            {/* variation 4: */}
            {/* <button
                onClick={() => {
                    console.log("button clicked");
                }}
            >
                Add Animal
            </button> */}

            {/* variation 5: */}
            <button onClick={() => console.log("button clicked")}>
                Add Animal
            </button>
        </div>
    );
}

export default App;
