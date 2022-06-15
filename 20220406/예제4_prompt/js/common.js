"use strict"

// prompt는 값을 입력하면 반환시켜줌
// innerHTML은 값을 html 타입으로 반환한다.

window.onload = function() {  //윈도우가 로드된 후 실행문 실행
  // 실행문입력 영역
  let inputTextNum = "이름을 입력해 주세요";
  let nameText = prompt(inputTextNum);
  console.log(nameText);

  // document.body.innerHTML = "<p class='name'>" + nameText + "</p>";
  // innerText
  // document.body.innerHTML = "<input class='name' placeholder='" + inputTextNum + "' value='" + nameText +"'>";
  document.body.innerHTML = `<input class="name" placeholder="${inputTextNum}" value="${nameText}">`;
}
