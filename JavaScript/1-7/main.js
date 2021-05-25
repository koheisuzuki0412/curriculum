class Taiyaki {
  constructor(redbean, cream, cheese) {
    this.redbean = redbean;
    this.cream = cream;
    this.cheese = cheese;
  }
  property() {
    console.log("中身は" + this.redbean + "です。");
    console.log("中身は" + this.cream + "です。");
    console.log("中身は" + this.cheese + "です。");
  }
}
let okashi = new Taiyaki("あんこ", "クリーム", "チーズ");
okashi.property();