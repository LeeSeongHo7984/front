"use strict"

// query selector

let num = 0;

function textMove () {
  num += 10;
  console.log(num)
  let txtNum = document.querySelector("li .txt"); // class name "txt"인 배열 선언
  txtNum.style.backgroundColor = "red";
  txtNum.style.position = "relative";
  txtNum.style.left = `${num}px`;
}
