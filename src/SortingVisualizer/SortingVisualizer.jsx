import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";

function SortingVisualizer() {
  // USE STATE HOOKS, VALUES :::
  // array
  const [arr, setArr] = useState([]);
  // dummy count
  const [handleGenerateRandomArray, SetHandleGenerateRandomArray] =
    useState(false);
  // number of bars
  const [numOfBars, setNumOfBars] = useState(100);

  // GENERATE NEW RANDOM ARRAY LOGIC :::
  // similar to componentDidMount & componentDidUpdate
  useEffect(() => {
    generateRandomArr(numOfBars);
  }, [handleGenerateRandomArray, numOfBars]);

  function toggleSetHandlerGenerateRandomArray() {
    SetHandleGenerateRandomArray(!handleGenerateRandomArray);
  }

  function generateRandomArr(n) {
    const temp = [];
    for (let i = 0; i < n; i++) {
      temp.push(randomNumberInRange(5, 95));
    }
    setArr(temp);
  }

  return (
    <div className="svWrapper">
      <h1>Sorting Visualizer</h1>
      <div className="inputsWrapper">
        <button onClick={toggleSetHandlerGenerateRandomArray}>
          Generate New Random Array
        </button>
        <input
          type="range"
          id="slider"
          min={"5"}
          max={"200"}
          value={numOfBars}
          onChange={(event) => {
            setNumOfBars(event.target.value);
          }}
        />
      </div>
      <div className="barsWrapper">
        {arr.map((num, key) => {
          let wid = (100 * 1.0) / ((2 * arr.length + 1) * 1.0);
          return (
            <div
              className="bar"
              key={key}
              style={{ height: num + "%", width: wid + "%" }}
            >
              {/* {num} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// GET RANDOM NUMBER
function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
