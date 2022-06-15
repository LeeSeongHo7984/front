"use strict"

window.onload = function () {
  init(); // window가 로드된 이후 초기화 코드
}

function init () {
  let btn = document.createElement("div");  // div생성
  btn.id = "btn"; // id 생성
  btn.removeAttribute("id");  // id 제거
  let text = document.createTextNode("click!!");
  btn.append(text);
  let contain = document.createElement("div");
  // contain 요소에 wrap class 추가
  contain.classList.add("wrap");  // class 추가
  contain.append(btn);  // append는 콘텐츠를 선택된 요소 내부의 끝 부분 삽입
  // console.log(contain);
  let divBox = document.createElement("div");
  divBox.prepend(document.createTextNode("div-box")); // prepend는 콘텐츠를 선택한 요소 내부의 시작 부분 삽입
  document.body.append(contain);
  document.body.append(divBox);
}
