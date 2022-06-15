"use strict"

// 삼항조건식

// let num = prompt("숫자를 입력하세요");
// num = Number(num);
// let absNum = Math.abs(num);  //숫자를 절대값으로 반환

// if (num % 2 == 0) {
//   alert(`${num}는 짝수입니다.`);
// } else {
//   alert(`${num}는 홀수입니다.`);
// }

let num = prompt("숫자를 입력하세요.");
num = Number(num);
let absNum = Math.abs(num);  //숫자를 절대값으로 반환

num % 2 == 0 ? alert(`${num}는 짝수입니다.`) : alert(`${num}는 홀수입니다.`);
