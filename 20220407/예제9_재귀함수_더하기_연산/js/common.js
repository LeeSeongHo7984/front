"use strict"

let total = 0;

// let inputText = prompt("정수를 입력하세요.")
// inputText = Number(inputText);
// console.log(inputText);

function sum(i) {
  if (i < 1) {
    return 0; //return false와 같음.
  }
  total += i;
  i--;
  sum(i);
}

sum(5);
console.log(total);
