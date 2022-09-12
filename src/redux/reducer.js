import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "globalState",
  initialState: {
    array: [],
    toggleView: false,
    numOfBars: 100,
    sortingInProcess: false,
    selectedSort: "",
  },
  reducers: {
    generateRandomArr: (state, action) => {
      const temp = [];
      for (let i = 0; i < action.payload; i++) {
        temp.push(randomNumberInRange(5, 100));
      }
      state.array = temp;
    },
    toggleBarView: (state) => {
      state.toggleView = !state.toggleView;
    },
    reverseArray: (state) => {
      const temp = [...state.array];
      temp.reverse();
      state.array = temp;
    },
    sortArray: (state) => {
      const temp = [...state.array];
      temp.sort((a, b) => a - b);
      state.array = temp;
    },
    setNumOfBars: (state, action) => {
      state.numOfBars = action.payload;
      // also generrate new random array
      const temp = [];
      for (let i = 0; i < action.payload; i++) {
        temp.push(randomNumberInRange(5, 100));
      }
      state.array = temp;
    },
    setArray: (state, action) => {
      state.array = action.payload;
    },
    setSortingInProcess: (state, action) => {
      state.sortingInProcess = action.payload;
    },
    setSelectedSort: (state, action) => {
      state.selectedSort = action.payload;
    },
  },
});

export const {
  generateRandomArr,
  toggleBarView,
  reverseArray,
  sortArray,
  setNumOfBars,
  setArray,
  setSortingInProcess,
  setSelectedSort,
} = stateSlice.actions;

export default stateSlice.reducer;

// GET RANDOM NUMBER
function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
