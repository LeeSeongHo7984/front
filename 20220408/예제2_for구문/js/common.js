"use strict"

// for 구문

// let arrayFruits = new Array();  // 생성자로 배열 생성
// arrayFruits.push("사과");

// let arrayFruits = ["사과", "배", "수박", "포도", "키위", "레몬"];

// let inputText = prompt("과일을 입력하세요.");
//
// for (let i = 0; i < arrayFruits.length; i++) {
//   if (arrayFruits[i] == inputText) {
//     alert(`맛있는 ${inputText}`);
//   }
// }

// for 구문에서 특정 구간에서 정지

// let outPut = "";
//
// for (var i = 0; i < 10; i++) {
//   outPut += "@";
//   console.log(outPut);
//   if (i == 5) {
//     // console.log("6번째 입니다.");
//     break;
//   }
// }

// 재고확인

let arrayFruits = ["사과", "배", "수박", "포도", "키위", "레몬"];
let inputText = prompt("과일을 입력해 주세요.","과일");
let check = 0;  // 재고가 없을때. 1일때는 재고가 있다.

for (var i = arrayFruits.length - 1; i >= 0; i--) {
  // console.log(arrayFruits[i]);
  if (inputText == arrayFruits[i]) { // 재고가 있다.
    alert(`맛있는 ${arrayFruits[i]}`);
    check = 1;
    break;  // 첫번째 재고 확인 후 종료
  } else if (i == 0) {  // 재고확인을 마친 마지막 i값
    console.log(`재고확인: ${check}`);
    if (check != 1) {  // check == 0 과 같은 의미
      alert("해당 상품의 재고가 없습니다.");
    }
  }
}
