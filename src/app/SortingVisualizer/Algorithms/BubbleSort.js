const bubbleSort = (array) => {
  const tempArr = [...array];
  const arrSize = tempArr.length;
  const arrInstance = [];

  // BUBBLE SORT
  for (let j = 0; j < arrSize - 1; j++) {
    for (let i = 0; i < arrSize - j - 1; i++) {
      if (tempArr[i] > tempArr[i + 1]) {
        [tempArr[i], tempArr[i + 1]] = [tempArr[i + 1], tempArr[i]];
        arrInstance.push({
          array: [...tempArr],
          g1: i,
          g2: i + 1,
          r1: -1,
          r2: -1,
          y: -1,
        });
      }
      // arrInstance.push([...tempArr]);
      arrInstance.push({
        array: [...tempArr],
        g1: -1,
        g2: -1,
        r1: i,
        r2: i + 1,
        y: -1,
      });
    }
  }

  arrInstance.push({ array: [...tempArr], g1: -1, g2: -1, r1: -1, r2: -1 });
  return arrInstance;
};

export default bubbleSort;
