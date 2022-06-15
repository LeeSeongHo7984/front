"use strict"

// 숫자나열

// 변수선언
let num = ""; // 숫자를 담을 변수
let count = 0;  // 작은 숫자 부터 큰 숫자까지 갯수

// function repeat(i, j) { // i는 시작하는 숫자, j는 끝나는 숫자 (파라미터가 있는 함수)
//   // 실행코드
//   if (count == 0) { // 초기실행
//     num += i;
//   } else if (i > j) { // 최대숫자 제한
//     return 0;
//   } else {  // 초기실행이 아니라면 콤마추가
//     num += "," + i;
//   }
//   i++;
//   count++;
//   repeat(i, j);
// }
//
// repeat(50, 80);
// console.log(num);

function repeat(i, j) {
  if (count == 0) {
    num += i;
  } else if (i > j) {
    return 0;
  } else {
    num += "+" +i;
  }
  i++;
  count++;
  repeat(i, j);
}

repeat(1, 3);
console.log(num);
