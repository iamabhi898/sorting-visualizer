import React, { useState } from "react";
import styles from "../../styles/styles.module.css";
// SORTING ALGOS
import bubbleSort from "../SortingVisualizer/Algorithms/BubbleSort";
import heapSort from "../SortingVisualizer/Algorithms/HeapSort";
import mergeSort from "../SortingVisualizer/Algorithms/MergeSort";
import quickSort from "../SortingVisualizer/Algorithms/QuickSort";
// REDUX - DISPATCHERS AND SELECTORS
import { useSelector, useDispatch } from "react-redux";
import {
  setArray,
  setSelectedSort,
  setSortingInProcess,
} from "../../redux/reducer";

const BottomToolbar = () => {
  // DISPATCHER
  const dispatch = useDispatch();
  // SELECTOR
  const { arrayState, selectedSort, sortingInProcess } = useSelector(
    (state) => state.globalState
  );
  // states
  const [selectToggle, setSelectToggle] = useState(false);
  const [sortTimeInterval, setSortTimeInterval] = useState(100);

  // Handle Visualization
  const visualize = (arrInstance) => {
    let i = 0;
    const intervalChange = setInterval(() => {
      if (i >= arrInstance.length) {
        dispatch(setSortingInProcess(false));
        clearInterval(intervalChange);
      } else {
        dispatch(setArray(arrInstance[i]));
      }
      i = i + 1;
    }, sortTimeInterval);
  };

  // Handle Array Instances of Sorting Algos
  const handleArrayInstances = (sortAlgo) => {
    dispatch(setSortingInProcess(true));
    switch (sortAlgo) {
      case "bubble":
        visualize(bubbleSort(arrayState.array));
        break;
      case "heap":
        visualize(heapSort(arrayState.array));
        break;
      case "merge":
        visualize(mergeSort(arrayState.array));
        break;
      case "quick":
        visualize(quickSort(arrayState.array));
        break;
      default:
        console.log("no sorting algo opted");
    }
  };

  return (
    <div className={styles.inputsWrapper}>
      <div className={styles.waterMark}>
        {selectedSort.length ? selectedSort.toUpperCase() + " SORT" : null}
      </div>
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
          disabled={sortingInProcess}
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
              dispatch(setSelectedSort("merge"));
            }}
          >
            Merge Sort
          </button>
          <button
            className={styles.button}
            onClick={() => {
              dispatch(setSelectedSort("heap"));
            }}
          >
            Heap Sort
          </button>
          <button
            className={styles.button}
            onClick={() => {
              dispatch(setSelectedSort("quick"));
            }}
          >
            Quick Sort
          </button>
          <button
            className={styles.button}
            onClick={() => {
              dispatch(setSelectedSort("bubble"));
            }}
          >
            Bubble Sort
          </button>
        </div>
      </div>
      <div className={styles.rightButtonWrapper}>
        {/* SLIDER ::: SPEED OF SORTING */}
        <p className={styles.text}>Speed </p>
        <input
          type="range"
          id={styles.slider}
          min={"0"}
          max={"500"}
          step={10}
          value={sortTimeInterval}
          disabled={sortingInProcess}
          style={{ direction: "rtl" }}
          onChange={(event) => {
            // 1 => 999ms && 1001 => 1ms
            setSortTimeInterval(Math.abs(event.target.value));
          }}
        />
        <p id={styles.sliderRangeValue}>
          {Math.round(500 - sortTimeInterval) / 100}
        </p>
        {selectedSort.length ? (
          <button
            className={styles.button}
            onClick={() => handleArrayInstances(selectedSort)}
            disabled={sortingInProcess}
          >
            Sort Using {capitalize(selectedSort)} Sort
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default BottomToolbar;

// capitalize first letter
function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}
