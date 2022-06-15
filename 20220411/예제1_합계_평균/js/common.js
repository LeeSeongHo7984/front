"use strict"

// let name = ["홍길동", "박길동", "김길동", "이길동", "최길동"];
// let age = [30, 18, 21, 35, 38];
// let height = [175, 180, 190, 185, 178];
// let sum = [85, 88, 90, 95, 95];


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
//
// // document.body.innerHtml = ;
// // }
// // 1. 각각의 데이터를 배열에 담는다.
// // 2. 데이터의 합산과 평균을 구하는 함수를 만든다.
// // 3. 반복구문을 사용하여 document에 데이터를 출력한다.

window.onload = function(){ // 페이지 모든 요소들이 로드되어야 호출됨
// 배열 선언
  let name = ['홍길동','박길동','김길동','이길동','최길동'];
  let age = [30,18,21,35,38];
  let height = [175,180,190,185,178];
  let score = [85,88,90,82,95];
  let heightTotal = 0;
  let ageTotal = 0;
  let scoreTotal = 0;

  // 합산 및 평균 구하는 함수
  function AVG(name, age, height, score) {
    for (var i = 0; i < name.length; i++) {
      ageTotal += age[i];
      heightTotal += height[i];
      scoreTotal += score[i];
    }
    ageTotal = ageTotal / age.length;
    heightTotal = heightTotal / height.length;
    scoreTotal = scoreTotal / score.length;

    return console.log(ageTotal, heightTotal, scoreTotal);
  }
//콘솔에 값 확인을 위한 함수 호출
AVG(name, age, height, score);

//table로 출력하기위한 for문
var tagHtml = '';
tagHtml += '<table>';
tagHtml += '<tr><th>이름</th><th>나이</th><th>키</th><th>점수</th></tr>';
for (var i = 0; i < name.length; i++) {
  tagHtml += '<tr><td>' + name[i] + '</td><td>' + age[i] + '</td><td>' + height[i] + '</td><td>' + score[i] + '</td></tr>';
}
tagHtml += '<td>평균</td><td>' + ageTotal + '</td><td>' + heightTotal + '</td><td>' + scoreTotal + '</td></tr>';
tagHtml += '</table>'


  document.body.innerHTML = tagHtml;
}
