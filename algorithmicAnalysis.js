const threeSum = (arr, target) => {
  let threeNums = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          threeNums.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  return threeNums;
};

console.log(threeSum([1,2,3,4,5], 12));
