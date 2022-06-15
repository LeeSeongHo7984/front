"use strict"

// // 일반함수 표기
// function() {
//   // 실행문
// }

let commonFunc = function() {
  // 실행문
  console.log("나는 일반표기함수 입니다.");
}

// 선언적 함수
function numFunc(a, b) {
  // 실행문
}

// arrow function (화살표 함수)
// ES6이상 사용
let arrowFunc = () => {
  console.log("나는 화살표 함수입니다.");
}

commonFunc();
arrowFunc();

// 즉시실행함수
(function(){
  console.log("나는 즉시 실행 함수 입니다.");
}())
