"use strict"

// substr 사용

let nameStr = ["박길동", "홍길동", "이길동"];
let str = "hello javascript";
let strNum = "20200413";
let numberText = "1234567890";

// console.log(str[0]);
// console.log(str.length);
// console.log(numberText.substr(1,1));

// console.log(str.substr(0));
// let ntNum_01 = numberText.substr(1,1);
// console.log(ntNum_01);

let str01 = strNum.substr(6,2);
let str02 = nameStr[0];
let str03 = numberText.substr(1,2);

console.log("오늘은 " + str01 +" 입니다.\n" + "저는 " + str02 +" 입니다\n" + "나이는 " + str03 + " 입니다.");
// console.log(`오늘은 ${str01} 입니다.\n저는 ${str02} 입니다.\n나이는 ${str03} 입니다.`);
