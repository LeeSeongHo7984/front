"use strict"

function Product (name, price) {
  this.name = name;
  this.price = price;
  this.getProduct = function () {
    console.log("getProduct!!!");
  }
}

function Food (name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

let pd = new Product("사과", 5000);

console.log(pd.name)
pd.getProduct();

let bread = new Food("chocobread", 5000);
console.log(bread.category);

function Bakery (name, price) {
  Product.call(this, name, price);
  this.category = "bakery";
  this.pdCheck = function () {
  console.log(`카테고리에서 구매하신 상품은 ${this.name}이고 상품의 금액은 ${this.price}원 입니다.`)
  }
}

let bakery = new Bakery("cheese-bread", 7000);
bakery.pdCheck();
