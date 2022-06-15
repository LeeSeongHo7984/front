"use strict"

// 홀수 짝수 구분하여서 별찍기

// i가 홀수 일때는 '/*'
// i가 짝수 일때는 '/**'
// 복합대입연산자 + outPut 변수에 추가하시오.

let outPut = "";
for (let i = 0; i < 10; i++) {
  if (i % 2 == 1) {
  outPut += "/*";
  console.log(outPut);
  } else if (i % 2 == 0) {
  outPut += "/**";
  console.log(outPut);
  }
}
