"use strict"

let setTimeNum;
let num = prompt("숫자를 입력해 주세요.");
num = Number(num);

setTimeNum = setTimeout(function(){ // 일정시간 이후 로직(함수에 대한 내용)을 작동 시킨다.
  alert("this is setTimeout!!");
}, 5000);

if (num > 10) {
  clearTimeout(setTimeNum); // setTimeout을 정지
  alert("setTimeout 정지하였습니다.");
} else {
  alert("setTimeout 실행하였습니다.");
};
