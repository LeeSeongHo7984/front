"use strict"

class User {
  constructor(name, age, local) {
    this.name = name;
    this.age = age;
    this.local = local;
  }
  introduce () {
    console.log(`안녕하세요, ${this.local}에 사는 ${this.age}살, ${this.name}입니다.`);
  }
  get age () {
    return this._age;
  }
  set age (value) { // 값을 받아올때 체킹을 해주는게 set
    this._age = value < 0 ? 0 : value;
  }
}

let user = new User("홍길동", -50, "대구");
user.introduce();
