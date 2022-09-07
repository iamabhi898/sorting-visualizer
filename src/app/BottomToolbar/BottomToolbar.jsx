import React, { useState } from "react";
import styles from "../../styles/styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { sortArray } from "../../redux/reducer";

const BottomToolbar = () => {
  // DISPATCHER
  const dispatch = useDispatch();
  // states
  const [selectToggle, setSelectToggle] = useState(false);
  const [crrSelectSort, setCrrSelectedSort] = useState("");

  return (
    <div className={styles.inputsWrapper}>
      <div className={styles.waterMark}>{crrSelectSort}</div>
      <div className={`${styles.leftButtonWrapper} ${styles.dropupWrapper}`}>
        <button
          className={styles.button}
          onClick={() => {
            setSelectToggle(!selectToggle);
          }}
          onBlur={() => {
            setTimeout(() => {
              setSelectToggle(false);
            }, 300);
          }}
        >
          Select Sorting Algorithm {selectToggle ? "👇" : "👆"}
        </button>
        <div
          className={styles.dropupMenu}
          style={{ display: selectToggle ? "flex" : "none" }}
        >
          <button
            className={styles.button}
            onClick={() => {
              setCrrSelectedSort("MERGE SORT");
            }}
          >
            Merge Sort
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setCrrSelectedSort("HEAP SORT");
            }}
          >
            Heap Sort
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setCrrSelectedSort("QUICK SORT");
            }}
          >
            Quick Sort
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setCrrSelectedSort("BUBBLE SORT");
            }}
          >
            Bubble Sort
          </button>
        </div>
      </div>
      <div className={styles.rightButtonWrapper}>
        <button className={styles.button} onClick={() => dispatch(sortArray())}>
          Sort Array
        </button>
      </div>
    </div>
  );
};

export default BottomToolbar;
