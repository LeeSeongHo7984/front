$(function () {
  //srcipt 영역 event 사용 예
  // $("body").append("<span class='tooltip'></span>") // 2번 문제 코드 ( 클래스 추가 )
  $("img").mousemove(function(e) {
    let mX = e.clientX; // x값
    let mY = e.clientY; // y값

    // 1. span 태그 내부에 "현재 x좌표 : ** 현재 y좌표 : **" 추가하고
    // span 위치를 e.clientX, e.clientY 값을 사용하여 커서를 따라다니는
    // 로직을 구현하시오.

    $("span").html(`현재 x좌표 : ${mX}, 현재 y좌표 : ${mY}`);
    $("span").css({"left": mX, "top": mY});

    // 2. jquery 요소를 추가하는 method를 사용하여 span태그를 추가하고
    // tooltip 클래스를 갖고 있는 span 태그를 body 태그에 추가하시오.

    // $("span").html(`현재 x좌표 : ${mX}, 현재 y좌표 : ${mY}`);
    // $("span").css({"left": mX, "top": mY});
  });
});
