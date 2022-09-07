const bubbleSort = (array) => {
  const tempArr = [...array];
  const arrSize = tempArr.length;
  const arrInstance = [];

  // BUBBLE SORT
  for (let j = 0; j < arrSize - 1; j++) {
    for (let i = 0; i < arrSize - j - 1; i++) {
      if (tempArr[i] > tempArr[i + 1]) {
        [tempArr[i], tempArr[i + 1]] = [tempArr[i + 1], tempArr[i]];
      }
      arrInstance.push([...tempArr]);
    }
  }

  return arrInstance;
};

export default bubbleSort;
