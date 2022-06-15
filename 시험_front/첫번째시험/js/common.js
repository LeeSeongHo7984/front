"use strict"

let temperature = [32, 28, 35, 27, 26, 32, 38];

function temFunc(arrayNum) {
  let total = 0;
  let temLeng = arrayNum.length;
  let temAvg;

  for ( let i = 0; i < temLeng; i++ ) {
    total += arrayNum[i];
  }
    temAvg = total / temLeng;
    return temAvg = Math.round(temAvg);
}

    let list = "<table>";
    list += "<tr><th>NO</th><th>온도</th></tr>";

    for (let i = 0; i < temperature.length; i++ ) {
      list += "<tr><td>"+ (i+1) + "</td><td>"+ temperature[i] + "</td></tr>";
    }

    list += "<tr><td>평균</td><td>" + temFunc(temperature) + "</td>"
    list += "</table>";

    document.body.innerHTML = list;
