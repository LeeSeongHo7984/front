"use strict"

let num = prompt("1~10 숫자를 입력해주세요.");
let randomNum = Math.random() * 10; // 난수(랜덤숫자) 받기
let sum = num + randomNum;

if ( sumNum > 10 ) {
    num = sumNum - 10;
} else if (sumNum >= 10 ) {
  num = sumNum;
}

num = Math.ceil(num); // 소수점 올림

// console.log(Math.ceil(Math.random) * 10);
// Math.ceil : 소수점 올림
// Math.round : 소수점 반올림
// Math.floor : 소수점 내림

function getNumber () {
  document.querySelectorAll("div")[num].setAttribute("class", "selected");

}
