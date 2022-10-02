import React from "react";
import styles from "../../styles/styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  generateRandomArr,
  toggleBarView,
  reverseArray,
  setNumOfBars,
} from "../../redux/reducer";

const TopToolbar = () => {
  // DISPATCHER
  const dispatch = useDispatch();
  // SELECTOR
  const { numOfBars, sortingInProcess } = useSelector(
    (state) => state.globalState
  );

  return (
    <div className={styles.inputsWrapper}>
      <div className={styles.leftButtonWrapper}>
        {/* BUTTON ::: GENERATE NEW RANDOM ARRAY */}
        <button
          className={styles.button}
          onClick={() => dispatch(generateRandomArr(numOfBars))}
          disabled={sortingInProcess}
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
          disabled={sortingInProcess}
        >
          Reverse Array
        </button>
      </div>
      {/* SLIDER ::: NUMBER OF BARS */}
      <div className={styles.rightButtonWrapper}>
        <p className={styles.text}>Number of Elements in Array </p>
        <input
          type="range"
          id={styles.slider}
          min={"5"}
          max={"200"}
          value={numOfBars}
          disabled={sortingInProcess}
          onChange={(event) => {
            dispatch(setNumOfBars(event.target.value));
          }}
        />
        <p id={styles.sliderRangeValue}>{numOfBars}</p>
      </div>
    </div>
  );
};

export default TopToolbar;
