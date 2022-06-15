"use strict"

let money = 10000;
let fruitX = prompt("사과의 가격을 입력해주세요");
let fruitY = prompt("배의 가격을 입력해주세요");
let sum = fruitX + fruitY;

fruitX = Number(fruitX);
fruitY = Number(fruitY);
sum = fruitX + fruitY;

alert(`사과의 가격은 ${fruitX}원이고, 배의 가격은 ${fruitY}원 입니다.\n 총 지불 금액은 ${sum}입니다.`);

console.log(typeof(money));
console.log(typeof(fruitX));
console.log(typeof(fruitY));
console.log(typeof(sum));

if(sum > money) {
  alert("가격이 비쌉니다. 에누리 해주세요.");
} else if(money > sum) {
  alert("가격이 저렴하네요, 포장해주세요.");
} else {
  alert("좀 더 싸게는 안될까요?");
};
