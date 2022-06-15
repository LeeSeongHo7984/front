"use strict"

class Shape {
  static circleRate = 3.14;
  constructor (width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  inputDraw (a, b) {  //매개변수 추가 : 값을 받아와서 그리기
    // 드로잉 로직 구현
    console.log(`${a};${b}`);
  }
  draw () {
    console.log("도형그리기");
  }
  getArea () {
    console.log(`${this.width * this.height}`);
  }
}

// let shapBox = new Shape(10, 10, "skyblue");
// shapBox.inputDraw(25, 10);
// shapBox.draw(); // 함수실행
// shapBox.getArea();

class Rectangle extends Shape {

}

class Triangle extends Shape {
  draw () {
    console.log("삼각형 그리기");
    super.draw(); // 오버라이딩 시 해당 함수내에서 부모함수 불러오기
  }
  getArea () {
    console.log("삼각형의 넓이 : " + this.width * this.height / 2);
  }
}

// let triClass = new Triangle (10, 20, "blue");
// triClass.getArea();

// 원형도형의 class 생성

class Circle extends Shape {
    constructor (radius, color) {
      super();
      // 생성자 재정의 시 부모의 field를 사용하지 않더라도
      // 먼저 호출 후 아래 재정의 하여 사용
      this.radius = radius;
      this.color = color;
    }
    getArea () {
      console.log(`파이 상수 : ${Shape.circleRate}`);
      console.log(this.radius * this.radius);
    }
    rotate () { // 개별 함수 만들기
      console.log("원형도형 회전하기");
    }
}

let rect = new Rectangle(5, 8, "skyblue");
let tria = new Triangle(5, 8, "red");
let circle = new Circle(50, "yellow");

rect.getArea();
console.log(rect.color);
rect.inputDraw(10, "도형그리기");
rect.draw();
rect.getArea();

tria.draw();
tria.getArea();
circle.getArea();
