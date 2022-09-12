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
  const { array, selectedSort, sortingInProcess } = useSelector(
    (state) => state.globalState
  );
  // states
  const [selectToggle, setSelectToggle] = useState(false);
  const [sortTimeInterval, setSortTimeInterval] = useState(20);

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
        visualize(bubbleSort(array));
        break;
      case "heap":
        visualize(heapSort(array));
        break;
      case "merge":
        visualize(mergeSort(array));
        break;
      case "quick":
        visualize(quickSort(array));
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
