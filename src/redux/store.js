import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "../redux/reducer";

export default configureStore({
  reducer: {
    globalState: stateReducer,
  },
});
