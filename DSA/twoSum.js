// // brute force method
// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
//   return -1;
// };

// console.log(twoSum([1, 2, 4, 5, 10, 20], 30));

// use js objects to optimize