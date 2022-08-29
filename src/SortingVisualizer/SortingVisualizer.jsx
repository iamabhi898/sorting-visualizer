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
  // flex-start||end - toggle bars position
  const [bottomUp, setBottomUp] = useState(true);

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
      temp.push(randomNumberInRange(5, 100));
    }
    setArr(temp);
  }

  // TOGGLE BAR VIEW - BOTTOM-UP or TOP-DOWN :::
  function toggleBarView() {
    setBottomUp(!bottomUp);
  }

  return (
    <div className="svWrapper">
      <div className="inputsWrapper">
        <div className="upperButtonWrapper">
          {/* BUTTON ::: GENERATE NEW RANDOM ARRAY */}
          <button
            className="button uppperBtn"
            onClick={toggleSetHandlerGenerateRandomArray}
          >
            Generate New Random Array
          </button>
          {/* BUTTON ::: TOGGLE BAR VIEW */}
          <button className="button uppperBtn" onClick={toggleBarView}>
            Toggle Bar View
          </button>
          {/* SLIDER ::: NUMBER OF BARS */}
        </div>
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
      {/* CONTAINER ::: BARS */}
      <div
        className="barsWrapper"
        style={{ alignItems: "flex-" + (bottomUp ? "start" : "end") }}
      >
        {/* BARS  */}
        {arr.map((num, key) => {
          let wid = (100 * 1.0) / ((2 * arr.length + 1) * 1.0);
          return (
            <div
              className="bar"
              key={key}
              style={{ height: num + "%", width: wid + "%" }}
            >
              {numOfBars <= 15 ? num : null}
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
