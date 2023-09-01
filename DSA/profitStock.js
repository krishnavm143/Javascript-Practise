// // prices=[7,5,2,1,4,6]
// const maxProfit = (prices) => {
//   let globalProfit = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const currentProfit = prices[j] - prices[i];
//       if (currentProfit > globalProfit) globalProfit = currentProfit;
//     }
//   }
//   return globalProfit;
// };

// console.log(maxProfit([7,5,2,1,4,6]))
// console.log(maxProfit([7,6,4,2,1]))
// greedy algorithm
