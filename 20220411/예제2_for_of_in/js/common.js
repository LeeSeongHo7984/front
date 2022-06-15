"use strict"

let array = ["사과", "배", "수박", "포도", "키위", "레몬"];
//let array = new Array();

let obj = {car: "승용차", phone: "iphone", house: "아파트"};
// let obj = new Object();

// console.log(typeof(array));
// console.log(typeof(obj));
// console.log(array);
// console.log(obj);

// for (let items of array) {  //반복 가능한 객체(iterable), 배열도 객체이며 array, set, map 등으로 사용할 수 있다.
//   console.log("for of 구문으로 출력하기:" + items);
// }

// for (let items in array) {
// console.log("for of 구문으로 index 출력하기:" + items);
// console.log("for in 구문으로 value 출력하기:" + array[items]);
// }

// for (let items of obj) {  //일반 객체타입은 itrable 하지 않기 때문에 for of를 사용 할 수 없다.
//   console.log("for of 구문으로 출력하기:" + items);
// }

// for (let [key, val] of Object.entries(obj)) {  //일반 객체 타입을 iterable 하게 사용하기.
//   console.log("for of 구문으로 출력하기: key : " + key + " ,value : " + val);
// }

// for (let items in obj) {
//   console.log("for in 구문으로 index 출력하기:" + items);
//   console.log("for in 구문으로 value 출력하기:" + obj[items]);
//   console.log("for in 구문으로 value 출력하기:" + obj.items); //obj.items는 obj"items"랑 같은 뜻(undefined)
// }

let userMap = new Map();
userMap.set("test", "phone");
userMap.set("car", "ferrari");
userMap.set("fruit", "딸기");
// console.log(userMap);
console.log(userMap.has("car"));

if (userMap.has("car")) {
  console.log("car는 존재합니다.");
  console.log(userMap.get("car"));
  console.log(userMap.size);
}

for (let items of userMap) {
  console.log(items);
}
