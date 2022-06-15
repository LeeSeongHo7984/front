"use strict"

// setInterval(function(){
//   console.log("test");
// }, 1000);

// move elements

function moveElem() {
  let pos = 0;
  let elem = document.getElementById('animate');
  let id = setInterval(frame, 5);

  function frame() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + "px";
  }
}
