// 演算子
let num1 = 10;
let num2 = 5;
let result;
result = num1 + num2;
console.log(result); //15

result = num1 - num2;
console.log(result); //5

result = num1 * num2;
console.log(result); //50

result = num1 % num2;
console.log(result); //0

// 算術演算子
let x = 10;
x++;
console.log(x); //11 ++インクレメント

let y = 20;
y--;
console.log(y); // 19 --デクリメント

// 比較演算し
console.log(10 === 10);
console.log(10 === 5);
console.log(10 !== 5);
console.log(10 > 20);
console.log(10 <= 20);
console.log(10 === 10);

// 条件分岐
let score = 50;
if (score > 90) {
  console.log("Great");
} else {
  console.log("No Good");
}