
// 問1:isEven関数を実行して、以下の配列から偶数だけが出力されるように実装してください
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
console.log(numbers);

let num = numbers.filter(function(value) {
  return value % 2 === 0;
})
function isEven() {
    console.log(num + 'は偶数です');
}
isEven();


// 問2:以下の要件を満たすように実装してください。
// 【要件】
// ・インスタンス化した時にガソリンとナンバーがセットされるようなCarクラスを作成する
// ・「ガソリンは〇〇です。ナンバーは△△です」と出力される「getNumGas」という関数を作成する
class car {
  constructor(num, gas) {
    this.num = num;
    this.gas = gas;
  }
  getNumGas() {
    console.log(`ガソリンは${this.gas}です。ナンバーは${this.num}です。`);
  }
}
let property = new car("△△", "○○");
property.getNumGas();