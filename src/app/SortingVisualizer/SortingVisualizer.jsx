import React, { useEffect } from "react";
import styles from "../../styles/styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { generateRandomArr } from "../../redux/reducer";

function SortingVisualizer() {
  const { numOfBars, array, toggleView } = useSelector(
    (state) => state.globalState
  );
  const dispatch = useDispatch();

  // Generate Random Array When Component Mounts
  useEffect(() => {
    dispatch(generateRandomArr(numOfBars));
  }, []);

  return (
    <div
      className={styles.barsWrapper}
      style={{ alignItems: "flex-" + (toggleView ? "end" : "start") }}
    >
      {array.map((num, key) => {
        let wid = (100 * 1.0) / ((2 * array.length + 1) * 1.0);
        return (
          <div
            className={styles.bar}
            key={key}
            style={{ height: num + "%", width: wid + "%" }}
          >
            {numOfBars <= 15 ? num : null}{" "}
          </div>
        );
      })}
    </div>
  );
}

export default SortingVisualizer;
