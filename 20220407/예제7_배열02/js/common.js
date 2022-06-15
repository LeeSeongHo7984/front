"use strict"

let inputText = prompt("과일을 입력해 주세요.");
let product = ["사과", "배", "수박", "포도"];
let count = 0;
console.log(product); // 값이 들어 있는지 확인

// 재고 확인 함수
function checkProduct() {  //함수 정의
  if (count < product.length) {
    if (inputText == product[count]) {
      alert(`${inputText}는 재고가 있습니다.`);
      let checkBuy = confirm("구매 하시겠습니까?");
      if (checkBuy) {
        alert("구매가 완료되었습니다");
      } else {
        alert("구매가 취소되었습니다.")
      }
    }
    count++;
    checkProduct(); // 함수 내 함수를 호출(재귀 함수)
  }
}

checkProduct(); //함수 호출
