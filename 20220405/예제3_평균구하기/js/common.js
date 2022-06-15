// // 평균구하기
// var score1, score2, score3, score4, score5, leng, total, avg;
//
// score1 = 85;
// score2 = 90;
// score3 = 95;
// score4 = 100;
// score5 = 75;
// leng = 5;
// total = score1 + score2 +score3 + score4 + score5;
// avg = total / leng;
//
// console.log(score1);
// console.log(score2);
// console.log(score3);
// console.log(score4);
// console.log(score5);
// console.log(leng);
// // console.log("총 합계는 " + total + " 입니다.");
// // console.log("평균은 " + avg + " 입니다.");
// console.log(`교과목 평균 점수는 ${avg} 입니다.`);

// 나이 키 평균 구하기
var heightTotal, ageTotal, heightAvg, ageAvg;
var countLeng = 10;

// 키 변수 선언
var tall1 = 175;
var tall2 = 180;
var tall3 = 182;
var tall4 = 190;
var tall5 = 185;
var tall6 = 179;
var tall7 = 182;
var tall8 = 183;
var tall9 = 192;
var tall10 = 187;
// 나이 변수 선언
var age1 = 32;
var age2 = 44;
var age3 = 21;
var age4 = 18;
var age5 = 52;
var age6 = 22;
var age7 = 45;
var age8 = 25;
var age9 = 38;
var age10 = 28;
// 키의 합산
var heightTotal = tall1 + tall2 + tall3 + tall4 + tall5 + tall6 + tall7 + tall8 + tall9 + tall10;
console.log(heightTotal);
// 나이의 합산
var ageTotal = age1 + age2 + age3 + age4 + age5 + age6 + age7 + age8 + age9 + age10;
// 키의 평균
var heightAvg = heightTotal / countLeng;
// 나이의 평균
var ageAvg = ageTotal / countLeng;

// alert출력하기
// 평균 키는 ***cm 입니다.
alert("평큔 키는 " + heightAvg + " 입니다.");
// 평균 나이는 ***살 입니다.
alert("평균 나이는 " + ageAvg + " 입니다.")
