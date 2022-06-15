"ust strict"

// if(조건문) {
//   조건이 만족되었을 때 실행문
// } else if(조건문) {
//   위 조건이 만족되지 않았을때 실행문
// } else {
//    위 조건 2개다 만족되지 않았을때 실행
// }

// confirm test
let inputText = confirm("회원가입을 하시겠습니까?");
console.log(inputText);

if(inputText) {
  alert("회원가입이 완료되었습니다.");
} else {
  alert("회원가입이 취소되었습니다.");
}
