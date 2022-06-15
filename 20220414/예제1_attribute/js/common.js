"use strict"

// let x = document.querySelectorAll("div")[0].getAttribute("id");
// console.log(document.querySelectorAll("div")[0]);
// console.log(x);

let num = document.querySelector(".container > div").getAttribute("class");
// console.log(num);

// 로고 href 속성 값 가져오기

let hrefNum = document.querySelector("header h1 a");
// hrefNum.setAttribute("href", "http://daum.com");
// hrefNum.setAttribute("class", "link");
// setAttribute 의 첫번째 인자는 속성의 name값이고 두번째 인자는 속성의 값을 입력한다.
// console.log(hrefNum.getAttribute("href"));

// href 속성값을 가져와서 split로 naver 를 추출하기

let splitNum = hrefNum.getAttribute("href").split("//");
// console.log(splitNum[1]);
let txtNum = splitNum[1].split(".");
// console.log(txtNum)

// alert("현재 방문하신 사이트는 " + txtNum[0] +" 입니다.");

// 입력한 단어와 관련된 사이트로 이동하는 로직

function locationFunc () {
  let thisHref = window.location;
  let numText = document.querySelector("#location").value // 아이디가 location인 값(value)을 numText에 담는다
  console.log(numText);
  thisHref.href = `http://${numText}.com`;
}
