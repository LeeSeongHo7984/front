"use strict"

let infoText = "javascript, html, css3, photoshop, xd";
let aHtml = "<h1>My Skill</h1>";

// infoText를 substring으로 단어를 개별 추출하고 해당값을 배열에 담아서
// aHtml의 변수에 반복구문을 사용하여서 추가(ul)한 후 document에 있는 요소
// .demo element에 출력

//두번째 방법
// let str1 = infoText.substring(0, 10);
// let str2 = infoText.substring(12, 16);
// let str3 = infoText.substring(18, 22);
// let str4 = infoText.substring(24, 33);
// let str5 = infoText.substring(35, 37);
//
// let strText = [str1, str2, str3, str4, str5];
// console.log(strText); //배열 확인
//
// aHtml += "<ul>";
//
// for(let i = 0; i < strText.length; i++) {
//   aHtml += "<li>" + strText[i] + "</li>"
// };
//
// aHtml += "</ul>";
//
// document.getElementsByClassName("demo")[0].innerHTML = aHtml;

// 첫 번째 방법
let str = [];

str.push(infoText.substring(0, 10));
str.push(infoText.substring(12, 16));
str.push(infoText.substring(18, 22));
str.push(infoText.substring(24, 33));
str.push(infoText.substring(35, 37));
console.log(str)

aHtml += "<ul>";

for (let i = 0; i < str.length; i++ ) {
  aHtml += "<li>" + str[i] + "</li>"
};

aHtml += "</ul>";

document.getElementsByClassName("demo")[0].innerHTML = aHtml;
