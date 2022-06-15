"use strict"

// number string test

window.onload = function() {
  let num = 1;
  let textNum = "안녕하세요";
  let numberVar = 10;
  // console.log(num + numberVar);
  let changeString = String(num); //자료형을 String형으로 바꿈
  let changeNumber = null;
  // console.log(changeString + numberVar);
  // console.log("값: " + changeString + "," + "데이터 타입: " + typeof(changeString));

  changeString += numberVar;  //결과값:110 문자타입(string)
  console.log(changeString + 20);
  changeNumber = Number(changeString);
  console.log("값: " + (changeNumber + 20) + " 데이터타입: " + typeof(changeNumber));
}
