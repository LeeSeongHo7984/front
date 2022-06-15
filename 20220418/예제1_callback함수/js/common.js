"use strict"

// 표기방법에 따른 분류
//
// 익명함수
// function () {}
//
// 선언적 함수
// function testFunc() {}
//
// 사용방법에 따른 분류
//
// 재귀함수
// function testFunc() {
//   testFunc();
// }
//
// 콜백함수 : 다른 함수의 매개변수로 사용되거나,
//           event로 특정시점에 호출되는 함수
//           비동기적으로 작동될때 사용
function avgCalc(a, b, c) {
  let sum = a + b;
  c(sum); // 함수 실행
}

// 익명함수로 콜백함수 호출
// console.log(avgCalc(1,2));
avgCalc(10, 30, function (num) {
  let avg = num / 2;
  console.log(avg);
});

// arrow function으로 콜백함수 호출
avgCalc(20, 40, (num) => {
  let avg = num / 2;
  console.log(avg);
})

// 선언적 함수로 콜백함수 부르기
function avg (num) {
  let avg = num / 2;
  console.log(avg)
}

avgCalc ( 50, 100, avg )
// let sum = 50 + 100;
// avg(sum);

function areaFunc (a, b, c) {
  let multi = a * b;
  return c(multi);
}

function squareFunc (num) { //위에 c가 함수 형태로 되어있음. -> c(multi) c를 squareFunc라는 이름으로 함수를 만들어 파라미터 multi를 실행시키는 실행문
  // console.log(num)
  return num;
}

console.log(areaFunc (10, 10, squareFunc));

// window.onload = function () {
//   document.getElementById("wrap").innerHTML = myFunction();
//   function myFunction() {
//     return this;  //window
//   }
// }
