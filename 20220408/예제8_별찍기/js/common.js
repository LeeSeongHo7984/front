"use strict"

// 중첩 for 구문
// 삼각형, 피라미드형 별찍기

// 피라미드

// let outPut = "";
//
// for (let i = 0; i < 15; i++) {
//   for(let j = 15; j > i; j--) {
//     outPut += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     outPut += "*";
//   }
//   outPut += "\n";
// }
// console.log(outPut)

//마름모

let outPut = "";

for (let i = 0; i < 15; i++) {
  for(let j = 15; j > i; j--) {
    outPut += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    outPut += "*";
  }
  outPut += "\n";
}
for (let i = 15; i >= 0; i--) {
  for (let j = 15; j > i; j--) {
    outPut += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    outPut += "*";
  }
  outPut += "\n";
}

console.log(outPut);
