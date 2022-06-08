function partition(arr, start, end) {
  const pivot = arr[Math.floor((start + end) / 2)];
  let i = start;
  let j = end;

  while (i <= j) {
    while(arr[i] < pivot) {
      i++;
    }

    while(arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(arr, start, end) {
  let index;

  if (arr.length > 1) {
    index = partition(arr, start, end);

    if (start < index - 1) {
      quickSort(arr, start, index - 1);
    }

    if (end > index) {
      quickSort(arr, index, end);
    }
  }
  return arr;
}

const arr = [3,8,4,1,5,9,6,10,20, 15, 13];

console.log(quickSort(arr, 0, arr.length - 1));