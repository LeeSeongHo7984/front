"use strict"

window.onload = function() {
  var name1 = "홍길동";
  var name2 = "박길동";
  var name3 = "김길동";
  var name4 = "이길동";
  var name5 = "최길동";

  var age1 = 30;
  var age2 = 18;
  var age3 = 21;
  var age4 = 35;
  var age5 = 38;

  var height1 = 175;
  var height2 = 180;
  var height3 = 190;
  var height4 = 185;
  var height5 = 178;

  var sum1 = 85;
  var sum2 = 88;
  var sum3 = 90;
  var sum4 = 95;
  var sum5 = 95;

  var countLeng = 5;

  var ageAvg = (age1 + age2 + age3 + age4 +age5) / countLeng;
  var heightAvg = (height1 + height2 + height3 + height4 + height5) / countLeng;
  var sumAvg = (sum1 + sum2 + sum3 + sum4 + sum5) / countLeng;

  console.log(ageAvg);
  console.log(heightAvg);
  console.log(sumAvg);

  var list = "";

  list += "<table>";
  list += "<tr><td>이름</td><td>나이</td><td>키</td><td>점수</td></tr>";
  list += "<tr><td>" + name1 + "</td><td>" + age1 + "</td><td>" + height1 + "</td><td>" + sum1 + "</td></tr>";
  list += "<tr><td>" + name2 + "</td><td>" + age2 + "</td><td>" + height2 + "</td><td>" + sum2 + "</td></tr>";
  list += "<tr><td>" + name3 + "</td><td>" + age3 + "</td><td>" + height3 + "</td><td>" + sum3 + "</td></tr>";
  list += "<tr><td>" + name4 + "</td><td>" + age4 + "</td><td>" + height4 + "</td><td>" + sum4 + "</td></tr>";
  list += "<tr><td>" + name5 + "</td><td>" + age5 + "</td><td>" + height5 + "</td><td>" + sum5 + "</td></tr>";
  list += "<tr><td> 평균 </td><td>" + ageAvg + "</td><td>" + heightAvg + "</td><td>" + sumAvg + "</td></tr>";
  list += "</table>";

  console.log(list);

  document.body.innerHTML = list;

}

// let name = ["홍길동", "박길동", "김길동", "이길동", "최길동"];
// let age = [30, 18, 21, 35, 38];
// let height = [175, 180, 190, 185, 178];
// let sum = [85, 88, 90, 95, 95];
//
// function sumFunc(arraySum) {
//   let total = 0;
//
//   for (let i = 0; i < arraySum.length; i++) {
//     total += arraySum[i];
//   }
//   return total;
// }
//
// console.log(`나이 합계: ${sumFunc(age)}, 키 합계: ${sumFunc(height)}, 점수 합계: ${sumFunc(sum)}`);
//
// function avgFunc(arrayAvg) {
//   let total = 0;
//
//   for(let i = 0; i < arrayAvg.length; i++) {
//     total += arrayAvg[i];
//   }
//   return total / arrayAvg.length;
// }
//
// console.log(`나이 평균: ${avgFunc(age)}, 키 평균 : ${avgFunc(height)}, 점수 평균: ${avgFunc(sum)}`);

// document.body.innerHtml = ;
// }
// 1. 각각의 데이터를 배열에 담는다.
// 2. 데이터의 합산과 평균을 구하는 함수를 만든다.
// 3. 반복구문을 사용하여 document에 데이터를 출력한다.
