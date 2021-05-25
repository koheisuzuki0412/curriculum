let scores = [10, 15, 20, 25];
console.log(scores);

// for (i = 0; i <= i.length; i++) {
//   if (i % 2 === 0) {
//     console.log(scores + "は偶数です");
//   }
// }

let result = scores.filter(function(value) {
  return value % 2 === 0;
})
console.log(result + "は偶数");

let car = {
  gas: 20.5,
  num: 1234,
};
console.log(car);
console.log("ガソリンは" + car.gas + "です。");
console.log("ナンバーは" + car.num + "です。");
