// checking sum zero
// [-5,-4,-3,-2,0,2,4,5,8]

function checkSumZero(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log('outer')
    for (let j = i + 1; j < arr.length; j++) {
        console.log('inner')
      let sum = arr[i] + arr[j];
      if (sum === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return -1;
}

const sum = checkSumZero([-5, -4, -3, -2, 0, 1, 7, 6, 9]);
console.log(sum);
