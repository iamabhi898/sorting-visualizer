function swap(arr, i, j, arrInst) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  arrInst.push([...arr]);
}

function partition(arr, low, high, arrInst) {
  let pivot = arr[high];

  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j, arrInst);
    }
  }
  swap(arr, i + 1, high, arrInst);
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
  return arrInst;
};

export default quickSortFunc;
