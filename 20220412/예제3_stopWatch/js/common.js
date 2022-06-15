"use strict"

let count = 0;  // 숫자(초) 카운터를 담는 변수
let m = 0;  // 숫자(분) 카운터를 담는 변수
let t = null;  // setTimeout을 담는 변수
let timerIsOn = 0;  //setTimeout의 진행여부를 확인하는 변수

// setTimeout 실행 함수
function timeCount() {  // 1초마다 한번씩 count를 증가시키는 함수
  if ( m > 0 ) {
  document.getElementById("stop-watch").innerHTML = `${m}분${count}초`;
} else {
  document.getElementById("stop-watch").innerHTML = `${count}초`;
}

  count += 1;

  if ( count == 60 ) {
    m += 1;
    count = 1;
  }
  t = setTimeout(timeCount, 1000);
}


function startCount() { // timeCount 함수를 실행시키는 함수
  if (timerIsOn == 0) { // timerIsOn != 1 같은 의미
    timerIsOn = 1;
    timeCount();
  }
}

function stopCount() {
  clearTimeout(t);
  timerIsOn = 0;
}

function resetCount() {
  clearTimeout(t);
  timerIsOn = 0;
  count = 0;
  document.getElementById("stop-watch").innerHTML = count;
}
