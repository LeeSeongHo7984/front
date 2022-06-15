"use strict"

// classList

function sideMenuSlide () {
  let elem = document.querySelector("#sidemenu");
  let checkNum = elem.getAttribute("class");
  elem.classList.toggle("on");
  // // console.log(document.querySelector("#sidemenu").getAttribute("class"));
  // if ( checkNum == "on" ) {  // on이라는 class가 있을때
  //   elem.classList.remove("on");
  //   //on을 삭제하는 코드
  // } else {
  //   // on을 추가하는 코드
  //   elem.classList.add("on");
  // }
}
