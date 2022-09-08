import React, { useState } from "react";
import styles from "../../styles/styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { sortArray, setArray } from "../../redux/reducer";
import bubbleSort from "../SortingVisualizer/Algorithms/BubbleSort";
import heapSort from "../SortingVisualizer/Algorithms/HeapSort";
import mergeSort from "../SortingVisualizer/Algorithms/MergeSort";
import quickSort from "../SortingVisualizer/Algorithms/QuickSort";

const BottomToolbar = () => {
  // DISPATCHER
  const dispatch = useDispatch();
  // SELECTOR
  const { array, numOfBars } = useSelector((state) => state.globalState);
  // states
  const [selectToggle, setSelectToggle] = useState(false);
  const [crrSelectSort, setCrrSelectedSort] = useState("");
  const [sortTimeInterval, setSortTimeInterval] = useState(20);

  // Handle Visualization
  const visualize = (arrInstance) => {
    let i = 0;
    const intervalChange = setInterval(() => {
      if (i >= arrInstance.length) {
        clearInterval(intervalChange);
      } else {
        dispatch(setArray(arrInstance[i]));
      }
      i = i + 1;
    }, sortTimeInterval);
  };

  // Handle Array Instances of Sorting Algos
  const handleArrayInstances = (sortAlgo) => {
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
      <div className={styles.waterMark}>{crrSelectSort.toUpperCase()}</div>
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
              setCrrSelectedSort("Merge Sort");
              handleArrayInstances("merge");
            }}
          >
            Merge Sort
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setCrrSelectedSort("Heap Sort");
              handleArrayInstances("heap");
            }}
          >
            Heap Sort
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setCrrSelectedSort("Quick Sort");
              handleArrayInstances("quick");
            }}
          >
            Quick Sort
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setCrrSelectedSort("Bubble Sort");
              handleArrayInstances("bubble");
            }}
          >
            Bubble Sort
          </button>
        </div>
      </div>
      <div className={styles.rightButtonWrapper}>
        <button className={styles.button} onClick={() => dispatch(sortArray())}>
          Sort: {crrSelectSort}
        </button>
      </div>
    </div>
  );
};

export default BottomToolbar;
