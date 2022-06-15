"use strict"

window.onload = function() {
let name = ['홍길동','박길동','김길동','이길동','최길동'];
let age = [30, 18, 21, 35, 38];
let height = [175, 180, 190, 185, 178];
let score = [85, 88, 90, 95, 95];

  function avgFunc(arrayNum) {
    let total = 0;
    let scoreLeng = arrayNum.length;
    let scoreAvg;

    for (let i = 0; i < scoreLeng; i++ ) {
      total += arrayNum[i]
      }
      scoreAvg = total / scoreLeng;
      return scoreAvg;
  }

  // console.log(`나이 평균: ${avgFunc(age)}, 키 평균: ${avgFunc(height)}, 점수 평균: ${avgFunc(score)}`);

  let list = "<table>";

  list += '<tr><th>이름</th><th>나이</th><th>키</th><th>점수</th></tr>';

  for (var i = 0; i < name.length; i++ ) {
  list += '<tr><td>' + name[i] +'</td><td>' + age[i] +'</td><td>' + height[i] + '</td><td>' + score[i] + '</td></tr>';
  }

  list += '<tr><th>평균</th><th>'+ avgFunc(age) +'</th><th>'+ avgFunc(height) +'</th><th>'+ avgFunc(score) +'</th></tr>';

  list += "</table>";

  document.getElementById("table-wrap").innerHTML = list;
}
