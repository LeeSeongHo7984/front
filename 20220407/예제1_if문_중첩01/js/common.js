"use strict"
// 시간 체크하기

const date = new Date();

let hours = date.getHours();  //현재 시간

// 조건문
// 11이전 아침식사, 15시 이전 점심식사, 나머지 저녁먹을 시간

if (hours < 11) {
  alert("아침먹을 시간 입니다.");
} else if (hours < 15) {
  alert("점심 먹을 시간입니다.");
} else {
  alert("저녁먹을 시간 입니다.")
}
