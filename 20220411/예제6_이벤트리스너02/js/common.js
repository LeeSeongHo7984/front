"use strict"

let outPutText = "";

function getText() {
  if (outPutText == "") { //입력된 값이 없을때, 초기화 값일 때
    outPutText += document.getElementById("fname").value;
  } else {
    outPutText += "<br>" + document.getElementById("fname").value;
  }
  document.getElementById("textarea").innerHTML = outPutText;
}

let domStyle = document.getElementById("textarea").style;
domStyle.backgroundColor = "skyblue";
domStyle.color = "white";
domStyle.fontSize = "32px";

document.getElementById("btn").addEventListener("click", getText);
