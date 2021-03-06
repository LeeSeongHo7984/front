"use strict"

let pos = 0;
let id = null;
let on = 0; // setInterval이 진행중인데 판단하는 변수
let elem = document.getElementsByClassName('box')[0];

function startMove() {
  if ( on == 0 ) {
    on = 1;
    id = setInterval(moveFunc, 50);
    function moveFunc() {
      pos++;
      elem.style.left = `${pos}px`;
    }
  }
}

function stopMove() {
  clearInterval(id);
  on = 0;
}

function returnMove() {
  clearInterval(id);
  on = 0;
  pos = 0;
  elem.style.left = `${pos}px`; // 이동한 box element를 초기화
}

startMove();
