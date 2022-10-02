function swap(arr, i, j, arrInst, pivot) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  arrInst.push({ array: [...arr], g1: i, g2: j, r1: -1, r2: -1, y: pivot });
}

function partition(arr, low, high, arrInst) {
  let pivot = arr[high];

  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    arrInst.push({
      array: [...arr],
      g1: -1,
      g2: -1,
      r1: i,
      r2: j,
      y: high,
    });
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j, arrInst, high);
    }
  }
  swap(arr, i + 1, high, arrInst, high);
  return i + 1;
}

function quickSort(arr, low, high, arrInst) {
  if (low < high) {
    let pi = partition(arr, low, high, arrInst);

    quickSort(arr, low, pi - 1, arrInst);
    quickSort(arr, pi + 1, high, arrInst);
  }
}

const quickSortFunc = (array) => {
  const tempArr = [...array];
  const arrInst = [];

  quickSort(tempArr, 0, tempArr.length - 1, arrInst);

  arrInst.push({ array: [...tempArr], g1: -1, g2: -1, r1: -1, r2: -1, y: -1 });
  return arrInst;
};

export default quickSortFunc;
