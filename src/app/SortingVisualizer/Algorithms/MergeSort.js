function merge(arr, l, m, r, arrInst) {
  let n1 = m - l + 1;
  let n2 = r - m;

  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) L[i] = arr[l + i];
  for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    arrInst.push({
      array: [...arr],
      g1: -1,
      g2: -1,
      r1: k,
      r2: j + m + 1,
      y: -1,
    });
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      // shifting
      let tk = k + 1;
      let ti = i + 1;
      let tj = j;
      while (ti < n1) {
        arr[tk] = L[ti];
        ti++;
        tk++;
      }
      while (tj < n2) {
        arr[tk] = R[tj];
        tj++;
        tk++;
      }
      arrInst.push({
        array: [...arr],
        g1: k,
        g2: k + 1,
        r1: -1,
        r2: -1,
        y: -1,
      });
      i++;
    } else {
      arr[k] = R[j];
      // shifting
      let tk = k + 1;
      let ti = i;
      let tj = j + 1;
      while (ti < n1) {
        arr[tk] = L[ti];
        ti++;
        tk++;
      }
      while (tj < n2) {
        arr[tk] = R[tj];
        tj++;
        tk++;
      }
      arrInst.push({
        array: [...arr],
        g1: k,
        g2: k + 1,
        r1: -1,
        r2: -1,
        y: -1,
      });
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    arrInst.push({ array: [...arr], g1: -1, g2: -1, r1: -1, r2: k, y: -1 });
    arrInst.push({ array: [...arr], g1: -1, g2: k, r1: -1, r2: -1, y: -1 });
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    arrInst.push({
      array: [...arr],
      g1: -1,
      g2: -1,
      r1: j + m + 1,
      r2: k,
      y: -1,
    });
    arrInst.push({
      array: [...arr],
      g1: j + m + 1,
      g2: k,
      r1: -1,
      r2: -1,
      y: -1,
    });
    j++;
    k++;
  }
}

function mergeSortFunc(arr, l, r, arrInst) {
  if (l >= r) {
    return;
  }
  let m = l + parseInt((r - l) / 2);
  mergeSortFunc(arr, l, m, arrInst);
  mergeSortFunc(arr, m + 1, r, arrInst);
  merge(arr, l, m, r, arrInst);
}

const mergeSort = (array) => {
  const tempArr = [...array];
  const arrInst = [];
  mergeSortFunc(tempArr, 0, tempArr.length - 1, arrInst);
  arrInst.push({ array: [...tempArr], g1: -1, g2: -1, r1: -1, r2: -1, y: -1 });
  return arrInst;
};

export default mergeSort;
