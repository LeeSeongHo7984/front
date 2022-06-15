'use strict'

// live watch
// (function(){}()); 나중에 즉시실행함수로 변경해보자

let t;

function startTime(){
  let today = new Date(); //날짜 생성자
  let h = today.getHours(); //시간
  let m = today.getMinutes(); //분
  let s = today.getSeconds(); //초
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  function checkTime(i){ // 일의 자리에 '0'을 포함시키는 함수
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  // 구간 설정
  if ( h > 15 && m < 50 && m > 25) {
    document.getElementById('txt').innerHTML = '7교시입니다.';
  }else if ( h > 15 && m >= 50) {
    document.getElementById('txt').innerHTML = 'Cigarette Time';
  }else if ( h > 16 && m < 50 && m >= 0) {
    document.getElementById('txt').innerHTML = '8교시입니다.';
  }else if ( h > 16 && m >= 50) {
    document.getElementById('txt').innerHTML = '집가즈아아아ㅏ아아앙ㅇ';
  } else {
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}`;
  }

  t = setTimeout(startTime,1000); // 1초마다 한번씩 startTime 함수를 불러오겠다.
}


startTime();
