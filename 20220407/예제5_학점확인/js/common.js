"use strict"

//변수 선언

let num = prompt("학점을 입력해 주세요.");

if (num == "숫자" || num == "") {
  alert("입력된 숫자가 없습니다");
} else {
  num = Number(num);
  if (isNaN(num)) { //문자열과 숫자를 구분하는 함수를 사용한 조건문
  alert("영문자/한글/특수문자는 사용할 수 없습니다. 숫자를 입력하세요");
  } else if (num <= 4.5 && num >= 4.3 ) {
    alert("당신의 학점은 A+ 입니다");
  } else if (num <= 4.2 && num >= 3.9) {
    alert("당신의 학점은 A 입니다");
  } else if (num <= 3.8 && num >= 3.5) {
    alert("당신의 학점은 A- 입니다");
  } else if (num <= 3.4 && num >= 3.2) {
    alert("당신의 학점은 B+ 입니다");
  } else if (num <= 3.1 && num >= 2.9) {
    alert("당신의 학점은 B 입니다");
  } else if (num <= 2.8 && num >= 2.5) {
    alert("당신의 학점은 B- 입니다");
  } else if (num <= 2.4 && num >= 2.2) {
    alert("당신의 학점은 C+ 입니다");
  } else if (num <= 2.1 && num >= 1.9) {
    alert("당신의 학점은 C 입니다");
  } else if (num <= 1.8 && num >= 1.5) {
    alert("당신의 학점은 C- 입니다");
  } else if (num <= 1.4 && num >= 1.2) {
    alert("당신의 학점은 D+ 입니다");
  } else if (num <= 1.1 && num >= 0.9) {
    alert("당신의 학점은 D 입니다");
  } else if (num <= 0.8 && num >= 0.1) {
    alert("당신의 학점은 D- 입니다");
  } else if (num == 0) {
    alert("당신의 학점은 F 입니다. 재수강 신청 하세요!!");
  } else {
    alert("학점을 다시 입력해 주세요.")
  }
}
