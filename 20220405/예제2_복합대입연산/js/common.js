// 전위 연산
// var x,y;
// y = 2;
// x = --y;
// console.log(x);
// console.log(y);
//
// // 후위 연산
// var _x, _y;
// _y = 3;
// _x = _y--;
// console.log(_x);
// console.log(_y);
//
// 비교연산자
// var _num1 = 10;
// var _num2 = 20;
//
// console.log(_num1 > _num2);

// 복합대입 연산
var _x, _y, _total;
_x = 10;
_y = 5;

console.log("계산 전 _x의 값 : " + _x);

// 계산 합계
// _x = _x + _y; //_x에 합계를 재할당
// console.log("계산 후 _x의 값 : " + _x);

// 복합대입 연산
// _x -= _y;
_x -= _y + _y;
console.log("계산 후 _x의 값 : " + _x);
