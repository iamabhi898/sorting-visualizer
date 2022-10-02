import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "globalState",
  initialState: {
    arrayState: {
      array: [],
      g1: -1,
      g2: -1,
      r1: -1,
      r2: -1,
      y: -1,
    },
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
      state.arrayState.array = temp;
    },
    toggleBarView: (state) => {
      state.toggleView = !state.toggleView;
    },
    reverseArray: (state) => {
      const temp = [...state.arrayState.array];
      temp.reverse();
      state.arrayState.array = temp;
    },
    sortArray: (state) => {
      const temp = [...state.arrayState.array];
      temp.sort((a, b) => a - b);
      state.arrayState.array = temp;
    },
    setNumOfBars: (state, action) => {
      state.numOfBars = action.payload;
      // also generrate new random array
      const temp = [];
      for (let i = 0; i < action.payload; i++) {
        temp.push(randomNumberInRange(5, 100));
      }
      state.arrayState.array = temp;
    },
    setArray: (state, action) => {
      state.arrayState.array = action.payload.array;
      state.arrayState.g1 = action.payload.g1;
      state.arrayState.g2 = action.payload.g2;
      state.arrayState.r1 = action.payload.r1;
      state.arrayState.r2 = action.payload.r2;
      state.arrayState.y = action.payload.y;
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
