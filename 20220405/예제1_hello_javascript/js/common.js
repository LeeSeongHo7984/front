console.log("hello javascript!!")
// 변수 선언과 할당
//var num = 15;  //변수 선언과 할당을 동시에 할 수 있다.
//var clac;  //변수 선언
//calc = 10;  //변수에 값을 할당(변수에 값이 처음 할당될 경우 변수 초기화 한다라고 부른다.)
//console.log(calc);
//calc = 2; //변수에 값을 재할당
//console.log(calc);
// alert("입력하신 숫자는 " + num + " 입니다");
// alert(`입력하신 숫자는 ${calc} 입니다.`);

//변수 다중 선언
// var _sum_1, _sum_2, _sum_3, _total;
//
// _sum_1 = 1000;
// _sum_2 = 500;
// _sum_3 = 2000;
// _total = _sum_1 + _sum_2 + _sum_3;
//
// console.log(_sum_1);
// console.log(_sum_2);
// console.log(_sum_3);
// console.log(_total);

// alert("합계는 " + _total + " 원 입니다.");
// alert(`합계는 ${_total} 원 입니다.`);

// 원주율
var pi = 3.14159265;
var radius = 10;
var result; // 결과값을 담을 수 있는 변수 선언

// 원둘레
result = 2 * pi * radius;
console.log("원의 둘레는 " + result + " 입니다.");
// alert(`원의 둘레는 ${result} 입니다.`)

// 원넓이
result = pi * radius * radius;
console.log(`원의 넓이는 ${result} 입니다.`);

// 자료형의 종류
var stringVar = "string"; //문자열 타입 (string type)
var numberVar = 12345; //숫자 타입 (number type)
var booleanVar = true; // true, false 값을 반환하는 타입 (boolean type)
var functionVar = function(){
  //실행코드
}; //함수형 타입
var objectVar = {
  //변수, 함수, string, 배열, 객체
}  //객체형 타입
