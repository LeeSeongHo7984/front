"use strict"

class User {
  #idNumber = "1234"; // private field
  constructor(name, age, local, aaa) {
    this.name = name;
    this.age = age;
    this.local = local;
  }
  // 소개
  introduce () {
    alert(`안녕하세요, ${this.local}에 사는 ${this.age}살, ${this.name}입니다. ${this.#idNumber}`);
  }
}

let user = new User("tom", "39", "LA");
// console.log(user.name);
user.introduce();
// console.log(user.#idNumber); // private field 외부접근 실행 : error class 영역에서 정의
