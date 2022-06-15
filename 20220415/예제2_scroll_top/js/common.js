"use strict"

// scroll top

let numY = 0; // y축 scroll 변수
let numX = 0; // x축 scroll 변수
let elem = document.querySelector("#mydiv");
let ctnElem = document.querySelector("#content");

// y축 scroll 작동 함수
function scrollTopFunc () {
  numY += 10;
  elem = document.querySelector("#mydiv");
  elem.scrollTop = numY;
  // console.log(numY)
  console.log(elem.scrollTop)
  // console.log(`scroll height : ${elem.scrollHeight}, offset Height : ${elem.offsetHeight}`);
  // console.log(`scroll width : ${elem.scrollWidth}, offset Height : ${elem.offsetWidth}`);
}

function scrollBottomFunc () {
  numY -= 10;
  elem.scrollTop = numY;
  // console.log(numY)
  console.log(elem.scrollTop)
  if ( numY < 0 ) {
    numY = 0;
  }
}

// x축 scroll 작동 함수
function scrollRightFunc () {
  numX += 10;
  elem.scrollLeft = numX;
  console.log(ctnElem.offsetWidth)
  console.log(numX)
  console.log(elem.scrollLeft)
}

// y축 scroll 작동 함수
function scrollLeftFunc () {
  numX -= 10;
  elem.scrollLeft = numX;
  // console.log(ctnElem.offsetWidth)
  // console.log(numX)
  // console.log(elem.scrollLeft)
  if ( numX < 0 ) {
    numX = 0;
  }
}
