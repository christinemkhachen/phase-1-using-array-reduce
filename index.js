// Create a new variable called `totalBatteries`, which holds the sum of all of
//   the battery amounts in the `batteryBatches` array. (Note that the
//   `batteryBatches` variable has been provided for you in `index.js`.) Naturally,
//   you should use `reduce()` for this!

// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = batteryBatches.reduce((a, b) => a + b); // a is the "accumulator" which means the reduce method ((a, b) => a + b) <in this case>, will itterate through all the elements in the baterryBatches array,
//and add them one by one to the "accumulator"
//STRAIGHT UP: ADDING THE ELEMENTS TOGETHER TO GET A SUM POOOFF

//how reduce works under the hood
// const products = [
//   { name: "Shampoo", price: 4.99 },
//   { name: "Donuts", price: 7.99 },
//   { name: "Cookies", price: 6.49 },
//   { name: "Bath Gel", price: 13.99 },
// ];

// function getTotalAmountForProducts(products) {
//   let totalPrice = 0;

//   for (const product of products) {
//     totalPrice += product.price; // the += is a plus equals operator its the same as sayin totalPrice = totalPrice + product.price
//     console.log(product.price, totalPrice); // the reason the price continues to up is because we started at totalPrice which
//     //is equal to zero and we just keep adding on the lastsum to the next sum while itterating(loser talk)/going through(normal person talk) through the for of loop.
//   }

//   return totalPrice;
// }

// console.log(getTotalAmountForProducts(products)); // answer/return: 33.4
