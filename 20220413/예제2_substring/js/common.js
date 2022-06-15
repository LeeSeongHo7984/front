"use strict"

// substring : 작은수가 시작 인덱스, 큰수가 종료인덱스(종료인덱스는 추출시키지 않음)
// 음수는 인덱스 안에 값들이 다 출력됨,  0을 넣어도 값이 다 출력됨.

let a = "1234567890";
// let abc = a.substring(5, 2);
// let abc = a.substring(2, 5);

//위의 두개는 결과값이 동일하게 출력됨
//매개변수 중 작은 숫자가 시작인덱스로 로직이 작동한다.

// let abc = a.substring(-5);
// let abc = a.substring(0);
// console.log(abc);

let stringText = "hello this is string";
// substring() 메서드 사용 "hi" 값을 console.log로 출력

// console.log(`${stringText.substring(0,1)}${stringText.substring(8,9)}`);

let infoText = "안녕하세요. 저는 대구에 사는 홍길동입니다. 나이는 20세 입니다.";

let age = infoText.substring(25, 27);
let age1 = infoText.substring(29, 31);

let name = infoText.substring(17, 20);

let c = infoText.substring(10, 12);
console.log(`${age}: ${age1}세, 이름: ${name}, 지역: ${c}`)

// 나이: 20세, 이름: 홍길동, 지역: 대구
