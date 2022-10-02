import React, { useEffect } from "react";
import styles from "../../styles/styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { generateRandomArr } from "../../redux/reducer";

function SortingVisualizer() {
  const { numOfBars, arrayState, toggleView } = useSelector(
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
      {arrayState.array !== undefined
        ? arrayState.array.map((num, key) => {
            let wid = (100 * 1.0) / ((2 * arrayState.array.length + 1) * 1.0);
            return (
              <div
                className={`${styles.bar} ${
                  arrayState.g1 === key || arrayState.g2 === key
                    ? styles.greenBar
                    : null
                } ${
                  arrayState.r1 === key || arrayState.r2 === key
                    ? styles.redBar
                    : null
                } ${arrayState.y === key ? styles.yellowBar : null}`}
                key={key}
                style={{ height: num + "%", width: wid + "%" }}
              >
                {numOfBars <= 15 ? num : null}{" "}
              </div>
            );
          })
        : "<<<<  UNDEFINED ARRAY  >>>>"}
    </div>
  );
}

export default SortingVisualizer;
