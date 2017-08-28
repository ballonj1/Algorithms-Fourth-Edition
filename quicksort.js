function quicksort(arr, lo, hi) {
  if (hi <= lo) {
    return arr;
  }
  let partitionIndex = partition(arr, lo, hi);
  quicksort(arr, lo, partitionIndex - 1);
  quicksort(arr, partitionIndex + 1, hi);
  return arr;
}

function partition(arr, lo, hi) {
  let i = lo;
  let j = hi + 1;
  let pivot = arr[lo];

  while (true) {
    while (arr[++i] < pivot) {
      if (i === hi) {
        break;
      }
    }
    while (arr[--j] > pivot) {
      if (j === lo) {
        break;
      }
    }
    if (i >= j) {
      break;
    }
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = arr[i];
  }
  arr[lo] = arr[j];
  arr[j] = pivot;
  return j;
}
