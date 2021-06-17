class Taiyaki {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }
  property() {
    console.log("中身は" + this.ingredients + "です。");
  }

}

let cream = new Taiyaki("クリーム");
cream.property();

let redbean = new Taiyaki("あんこ");
redbean.property();

let cheese = new Taiyaki("チーズ");
cheese.property();