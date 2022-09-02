import React from "react";
import styles from "../../styles/styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  generateRandomArr,
  toggleBarView,
  reverseArray,
  sortArray,
  setNumOfBars,
} from "../../redux/reducer";

const TopToolbar = () => {
  // DISPATCHER
  const dispatch = useDispatch();
  // SELECTOR
  const { numOfBars } = useSelector((state) => state.globalState);

  return (
    <div className={styles.inputsWrapper}>
      <div className={styles.upperButtonWrapper}>
        {/* BUTTON ::: GENERATE NEW RANDOM ARRAY */}
        <button
          className={styles.button}
          onClick={() => dispatch(generateRandomArr(numOfBars))}
        >
          Generate New Random Array
        </button>
        {/* BUTTON ::: TOGGLE BAR VIEW */}
        <button
          className={styles.button}
          onClick={() => dispatch(toggleBarView())}
        >
          Toggle View
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(reverseArray())}
        >
          Reverse Array
        </button>
        <button className={styles.button} onClick={() => dispatch(sortArray())}>
          Sort Array
        </button>
      </div>
      {/* SLIDER ::: NUMBER OF BARS */}
      <div className={styles.sliderWrapper}>
        <input
          type="range"
          id={styles.slider}
          min={"5"}
          max={"200"}
          value={numOfBars}
          onChange={(event) => {
            dispatch(setNumOfBars(event.target.value));
            dispatch(generateRandomArr(numOfBars));
          }}
        />
        <p id={styles.sliderRangeValue}>{numOfBars}</p>
      </div>
    </div>
  );
};

export default TopToolbar;
