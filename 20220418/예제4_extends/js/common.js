"use strict"

// function testFunc() {}  // 함수 만드는 공식

// let objNum = { //object 가져오기
//   name : "jane"
// }
// console.log(objNum.name)

class Test {
  constructor (num) {
    this.num = num;
  }
  popupFunc () {
    alert("this is popup!!");
  }
}

let textBox = new Test("안녕하세요.");
console.log(textBox.popupFunc())
