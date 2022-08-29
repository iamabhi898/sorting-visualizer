import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";

function SortingVisualizer() {
  // USE STATE HOOKS, VALUES :::
  // array state
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

  // REVERSE ARRAY
  function reverseArray() {
    setArr((arr) => {
      const temp = [...arr];
      temp.reverse();
      return temp;
    });
  }

  function sortArray() {
    setArr((arr) => {
      const temp = [...arr];
      temp.sort((a, b) => a - b);
      return temp;
    });
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
          <button className="button uppperBtn" onClick={reverseArray}>
            Reverse Array
          </button>
          <button className="button uppperBtn" onClick={sortArray}>
            Sort Array
          </button>
        </div>
        {/* SLIDER ::: NUMBER OF BARS */}
        <div className="sliderWrapper">
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
          <p id="sliderRangeValue">{numOfBars}</p>
        </div>
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
              {numOfBars <= 15 ? num : null}{" "}
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
