function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowestNumber = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestNumber]) {
        lowestNumber = j;
      }
    }

    if (lowestNumber !== i) {
      let temp = arr[lowestNumber];
      arr[lowestNumber] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
// console.log(insertSort([9, 8, 7, 6, 5]));
