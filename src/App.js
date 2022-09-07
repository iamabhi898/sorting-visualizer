import SortingVisualizer from "./app/SortingVisualizer/SortingVisualizer";
import TopToolbar from "./app/TopToolbar/TopToolbar";
import BottomToolbar from "./app/BottomToolbar/BottomToolbar";
import styles from "./styles/styles.module.css";

function App() {
  return (
    <div className={`${styles.svWrapper}`}>
      <TopToolbar />
      <SortingVisualizer />
      <BottomToolbar />
    </div>
  );
}

export default App;
