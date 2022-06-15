'use strict'

window.onload = function() { //head 안에 script가 있어서 window 사용
  let name = ['홍길동','박길동','김길동','이길동','최길동'];
  let age = [30, 18, 21, 35, 38];
  let height = [175, 180, 190, 185, 178];
  let score = [85, 88, 90, 95, 95];

  // 평균 구하는 함수
  function avgFunc(arrayNum) {
    let total = 0;
    let scoreLeng = arrayNum.length;  //배열 길이
    let scoreAvg; //전체 평균
    for ( let i = 0 ; i < scoreLeng; i++) {
      total += arrayNum[i];
    }
    scoreAvg = total / scoreLeng;
    return scoreAvg = Math.ceil(scoreAvg);
  }
  //올림으로 처리하시오. ceil
  //반올림으로 처리하시오. round
  //버림으로 처리하시오. floor
  console.log(`나이 평균: ${avgFunc(age)}, 키 평균: ${avgFunc(height)}, 점수 평균: ${avgFunc(score)}`);

  // document에 text 출력
  let list = '<table>';

  list += '<tr><th>이름</th><th>나이</th><th>키</th><th>점수</th></tr>';

  for (var i = 0; i < name.length; i++) {
    list += '<tr><td>' + name[i] +'</td><td>' + age[i] +'</td><td>' + height[i] + '</td><td>' + score[i] + '</td></tr>';
  }

  list += '<tr><th>평균</th><th>'+ avgFunc(age) +'</th><th>'+ avgFunc(height) +'</th><th>'+ avgFunc(height) +'</th></tr>';

  list += '</table>';

  // let domDiv = document.getElementsByTagName('div')[0]; //뒤에 [0] 을 해줘야지 태그 형태로 받을수있음
  // domDiv.innerHTML = list;

  let domTable = document.getElementsByClassName('table-wrap')[0];

  function listOutPut() {
    domTable.innerHTML = list;
  }

  document.getElementById('get-info').addEventListener('click',listOutPut);

  // console.log(list);
  // document.getElementById('table-wrap').innerHTML = list;
}
