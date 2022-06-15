$(function () {
  // script 영역 prepend(), append() 사용예
  // prepend() 사용예 : prepend는 태그 안에 맨 앞 이동
  // let elemNum = $("p#first");
  // elemNum.prepend("<span>hi!!</span>");
  //
  // // append() 사용예 : append는 태그 안의 맨 뒤로 이동
  // elemNum.append("<span>have a good day!!</span>");

  // p 태그의 총 개수 3개
  // 각각의 p 태그의 자식요소의 제일 앞쪽에 "<strong>kind: </strong>"을
  // for 구문을 사용하여 추가

  // let pLeng = $("p").length;
  // $("p:nth-child(1)").prepend("<strong>kind: </strong>");
  // $("p:nth-child(2)").prepend("<strong>kind: </strong>");
  // $("p:nth-child(3)").prepend("<strong>kind: </strong>");

  // for ( var i = 0; i < pLeng; i ++ ) {
  //   let count = i + 1;
  //   $("p:nth-child(" + count + ")").prepend("<strong>kind: </strong>");
  // }
  //
  // // p 태그의 총 개수 3개
  // // 각각의 p 태그의 자식요소의 제일 뒤쪽에 "<br><strong>add text</strong>"을
  // // for 구문 초기값을 1로 시작하여 추가
  //
  // for( var i = 1; i <= pLeng; i++ ) {
  //   $("p:nth-child(" + (i) +")").append("<br><strong>add text</strong>")
  // }

  // $("ul li:nth-child(1) a").prepend("<img src='./img/bolt.png'>");
  // $("ul li:nth-child(2) a").prepend("<img src='./img/build.png'>");
  // $("ul li:nth-child(3) a").prepend("<img src='./img/paid.png'>");
  // $("ul li:nth-child(4) a").prepend("<img src='./img/watch.png'>");

  // 추가한 img 코드를 배열에 담고 반복구문으로 출력하시오.

  let arrayNum = []
  arrayNum.push("<img src='./img/bolt.png'>");
  arrayNum.push("<img src='./img/build.png'>");
  arrayNum.push("<img src='./img/paid.png'>");
  arrayNum.push("<img src='./img/watch.png'>");
  // console.log(arrayNum);

  // $("ul li:nth-child(1) a").prepend(arrayNum[0]);
  // $("ul li:nth-child(1) a").prepend(arrayNum[1]);
  // $("ul li:nth-child(1) a").prepend(arrayNum[2]);
  // $("ul li:nth-child(1) a").prepend(arrayNum[3]);

  // for ( i = 0; i < arrayNum.length; i++ ) {
  //   let count = i + 1;
  //   $("li:nth-child(" + count + ") a").prepend(arrayNum[i]);
  // }

  // let elem = $("ul li");
  // console.log($("ul li").find("a"));

  // 위 코드를 eq() 명령어(method)를 사용하여 변경하시오

  for ( i = 0; i < arrayNum.length; i++ ) {
    let count = i;
    $("li:eq(" + count + ") a").prepend(arrayNum[i]);
  }
});
