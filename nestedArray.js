const arr = [1,[4],5,[[7]],[[[[9]]]]]

const flattenArray = (arr) => {
  const flattenedArray = [];
  let flatIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr[i]
    while(Array.isArray(tempArr)) {
      tempArr = tempArr[0]
    }
    flattenedArray[flatIndex++] = tempArr;
  }

  return flattenedArray;
}

console.log('flatened array: ', flattenArray(arr));
