"use strict"
// 변수 선언

let num = prompt("숫자를 입력해 주세요.");
num = Number(num);

const numCheck = 5; //범위 조건 변수
const numCheck2 = 3;  //배수 조건 변수


if (num < numCheck) {
  alert(`숫자 ${num}은 ${numCheck}보다 작습니다.`);
   //조건이 만족하면 else if로 넘어감
  if (num % 3 == 0) {
  alert(`숫자 ${num}은 ${numCheck2}의 배수 입니다.`); //1번째 조건이 만족하지 않으면 여기서 실행
  } else if (num != 3) {
  alert(`입력한 ${num}은 ${numCheck2}과 같지 않습니다.`);
  }
}
