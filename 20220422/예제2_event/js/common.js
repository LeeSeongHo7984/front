$(function () {
  // script 영역 event 사용 예

  // button으로 event 실행
  // document.querySelector("button").addEventListner("click", function(){});
  // document.querySelector("button").onclick = function(){};

  // let num = 0;

  // console.log($("img").attr("title"));

  // 아래 코드를 사용하여 이미지를 toggle 형태로 구현하고
  // 첫번째 이미지에  alt 값 : 산이미지 1
  // 두번째 이미지에  alt 값 : 산이미지 2


  $("button").click(function() {
    // console.log("click!!");
    // console.log(num);
    // num++;

    let click = "button";

    if ( $("img").attr("title") == "mountain01" ) {
      // // 방법 1
      // $("img").attr("src", "./img/mountain_02.png");
      // $("img").attr("title", "mountain02");
      // $("img").attr("alt", "산이미지2");
      //
      // // 방법 2
      // $("img").attr("src", "./img/mountain_02.png").attr("title", "mountain02").attr("alt", "산이미지2");

      // // 방법 3
      $("img").attr({"src":"./img/mountain_02.png", "title":"mountain02", "alt":"산이미지2"});

    } else {
      // // 방법 1
      // $("img").attr("src", "./img/mountain_01.png");
      // $("img").attr("title", "./img/mountain_01.png");
      // $("img").attr("alt", "산이미지1");
      //
      // // 방법 2
      // $("img").attr("src", "./img/mountain_01.png").attr("title", "mountain01").attr("alt", "산이미지1");

      // // 방법 3
      $("img").attr({"src":"./img/mountain_01.png", "title":"mountain01", "alt":"산이미지1"});
    }
  });

  // a 태그 click event 사용시 함수 내 return false 사용,
  // 하위 브라우저 혹은 특정 브라우저에서 a link 기본 속성이
  // 먼저 실행하여 event가 작동하지 않는 경우가 있다.

  $("a").click(function (e) {
    if($("img").attr("title") == "mountain01") {
      $("img").attr({"src":"./img/mountain_02.png"});
    } else {
      $("img").attr({"src":"./img/mountain_01.png"});
    }
  })
});
