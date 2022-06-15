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

  //첫번째 input 태그추가
  // let inputText = document.createElement("input");
  // inputText.id = "male";
  // inputText.setAttribute("type", "checkbox");
  // contain.prepend(inputText);
  // // console.log(inputText);
  createInputFunc("male", "checkbox");

  //첫번째 label 추가
  // let inputLabel = document.createElement("label");
  // inputLabel.id = "gender";
  // inputLabel.setAttribute("for", "mail");
  // inputLabel.append(document.createTextNode("남성"));
  // contain.prepend(inputLabel);
  // console.log(inputLabel);
  contain.prepend(createLabelFunc("gender", "male", "남성"));

  //두번째 input 태그추가
  // let inputText2 = document.createElement("input");
  // inputText2.id = "male";
  // inputText2.setAttribute("type", "checkbox");
  // contain.prepend(inputText2);
  // // console.log(inputText);
  createInputFunc("female", "checkbox");

  //두번째 label 추가
  // let inputLabel2 = document.createElement("label");
  // inputLabel2.id = "gender";
  // inputLabel2.setAttribute("for", "female");
  // inputLabel2.append(document.createTextNode("여성"));
  // contain.prepend(inputLabel2);
  // console.log(inputLabel2);
  contain.prepend(createLabelFunc("gender", "female", "여성"));


  // //공통함수 라벨 만들기
  function createLabelFunc (id, forVal, txt) {
    let elem = document.createElement("label");
    elem.id = id;
    elem.setAttribute("for", forVal);
    elem.append(document.createTextNode(txt));
    return elem;
  }

  function createInputFunc (id, type) {
    let elem = document.createElement("input");
    elem.id = id;
    elem.setAttribute("type", type);
    contain.prepend(elem);
  }
}
