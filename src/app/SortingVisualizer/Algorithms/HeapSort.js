function heap_root(input, i, array_length, arrInst) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;

  if (left < array_length && input[left] > input[max]) {
    max = left;
  }

  if (right < array_length && input[right] > input[max]) {
    max = right;
  }

  if (max != i) {
    swap(input, i, max, arrInst);
    heap_root(input, max, array_length, arrInst);
  }
}

function swap(array, index_A, index_B, arrInst) {
  [array[index_A], array[index_B]] = [array[index_B], array[index_A]];
  arrInst.push([...array]);
}

const heapSort = (array) => {
  const tempArr = [...array];
  const arrSize = tempArr.length;
  const arrInst = [];

  let array_length = arrSize;

  for (let i = Math.floor(array_length / 2); i >= 0; i -= 1) {
    heap_root(tempArr, i, array_length, arrInst);
  }

  for (let i = arrSize - 1; i > 0; i--) {
    swap(tempArr, 0, i, arrInst);
    array_length--;

    heap_root(tempArr, 0, array_length, arrInst);
  }

  return arrInst;
};

export default heapSort;
