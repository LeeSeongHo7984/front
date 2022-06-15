"use strict"

//변수 선언
let inputText = prompt("숫자를 입력해 주세요.");
console.log(inputText);

if (inputText === "숫자" || inputText === "") { //조건 A or B 를 의미하고 A 혹은 B 둘 중 하나라도 참(true)이라면 조건문의 실행블럭을 실행한다.
  alert("입력된 숫자가 없습니다.");
} else {
  inputText = Number(inputText);
  if (isNaN(inputText)) {
    alert("숫자를 입력해 주세요.");
  } else if (inputText < 0) {
    alert(`입력하신 숫자 ${inputText}은(는) 음수입니다.`);
  } else if (inputText > 0) {
    alert(`입력하신 숫자 ${inputText}은(는) 양수입니다.`);
  }
}
