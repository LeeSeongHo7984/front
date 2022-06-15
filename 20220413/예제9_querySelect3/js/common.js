"use strict"

// query selector

function innerTxt() { // 텍스트 출력 함수
  let inputNum = document.querySelector("#input-text").value;
  document.querySelector( ".content h2 p" ).innerHTML = inputNum;
}
