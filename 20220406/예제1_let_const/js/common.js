"use strict"

// var, let, const test

// var : 재선언 O, 재할당 O
// let : 재선언 X, 재할당 O
// const: 재선언 X, 재할당 X

var numVar; //변수 선언
numVar = 10;  //변수 할당 및 초기화
var numVar = 10;  //변수 선언과 동시에 변수 값 할당 및 초기화
console.log(numVar);
var numVar; //재선언
console.log(numVar);

let numLet = 15;  //변수 선언과 동시에 변수 값 할당 및 초기화
console.log(numLet);
// let numLet;  //재선언이 안됨
numLet = 20;
console.log(numLet);

const numConst = 50;  //변수 선언과 동시에 초기화를 시켜야함
// numConst = 100;
// const numConst = 300;
console.log(numConst);
