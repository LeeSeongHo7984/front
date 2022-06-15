"use strict"

// 시간 체크하기

const date = new Date();

let year = date.getFullYear();  //년(연) 단위
// console.log(year);

let month = date.getMonth();  //월단위
// console.log(month + 1); //월 단위는 0부터 시작해서 +1을 해줘야 1월이 됨

let day = date.getDate();
// console.log(date);

let hours = date.getHours();  //현재 시간
// console.log(hours);

let minutes = date.getMinutes();  //현재 분단위
// console.log(minutes);

let seconds = date.getSeconds();  //초단위
// console.log(seconds);

// 오전 오후 확인 조건문

if (hours < 12) {
  alert(`${year}년 ${month+1}월 ${day}일 오전 ${hours - 12}: ${minutes}분 ${seconds}초 입니다.`)
} else if (hours > 12){
  alert(`${year}년 ${month+1}월 ${day}일 오후 ${hours - 12}: ${minutes}분 ${seconds}초 입니다.`)
} else {
  alert(`${year}년 ${month+1}월 ${day}일 정오입니다.`)
};
