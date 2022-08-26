import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";

function SortingVisualizer() {
  // array
  const [arr, setArr] = useState([]);
  // dummy count
  const [count, setCount] = useState(0);

  // similar to componentDidMount & componentDidUpdate
  useEffect(() => {
    document.title = `clicked ${count} times`;
  });

  function incrementCount() {
    setCount(count + 1);
  }

  function generateRandomArr() {
    const temp = [];
    for (let i = 0; i < 10; i++) {
      temp.push(randomNumberInRange(5, 1000));
    }
    setArr(temp);
  }

  return (
    <div className="svWrapper">
      <h1>Sorting Visualizer - clicked {count}</h1>
      <button
        onClick={() => {
          incrementCount();
          generateRandomArr();
        }}
      >
        Click Me
      </button>
      {arr.map((num, key) => {
        return (
          <p className={key}>
            {num} | {key}
          </p>
        );
      })}
    </div>
  );
}

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
