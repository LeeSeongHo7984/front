"use strict"

class Mobility {
  static staticField = "static1234";
  constructor(kind, mName, year) {
    this.kind = kind;
    this.mName = mName;
    this.year = year;
  }
}

let mobility = new Mobility("승용차", "v3", "2022");
console.log(mobility.staticField);  // 생성자 객체에서는 확인 할 수 없다.
console.log(Mobility.staticField);  // 원형 객체에서는 상수값을 가져올 수 있다.
// console.log(mobility.kind, mobility.mName, mobility.year);
