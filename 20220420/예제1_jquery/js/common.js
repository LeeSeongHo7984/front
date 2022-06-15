$(function() {
  // jquery 실행구문
  // document.querySelector("li").style.color = "skyblue";
  // $("li").css("color","red");  // css("속성", "값");
  // $("#first").css("color", "blue"); // id(#)값으로 설정
  // $("li.fourth").css("background-color", "black"); // class(.)값으로 설정

  // 세번째 li의 span 요소에 배경색을 blue로 변경
  // 두번째 li의 p 요소의 font-size를 10px로 변경
  // $("li.third span").css("background", "blue");
  // $("li.second p").css("font-size", "10px");'

  let num = 30;

  $(".first, .third, .fourth").css("left", `${num}px`);
  // $(".first, .third, .fourth").css("left", num + "px");
  // $(".first, .third, .fourth").css("left", num);
  //
  // // ul 첫번째 li의 자식 요소 span에 텍스트 색상을 red로 변경
  // $("li.first > span").css("color", "red");
  // $("*").css("color", "blue");

  // ul의 세번째 li요소를 인접선택자를 사용하여 텍스트 색상을 blue로 변경
  // $("ul li.second + li").css("color", "blue");  // 인접 선택자를 사용한 요소 선택
  // $("list:first-child").css("color", "green");  // 유사클래스를 사용한 요소 선택
  // $("list:last-child").css("color", "red");
  // $("list:last-child").css("color", "red").css("font-size", "10px");  // css 다중사용 (method chain)
  // $("li.second ~ li").css("color", "yellow");  // 동위 선택자를 사용한 요소 선택
  // $("li:not(:first-child)").css("color", "red"); // 부정 유사 클래스를 사용한 요소 선택

  // 메뉴구조 요소를 선택하고 style을 적용
  $("span").css("color", "red");
  // $(".submenu span").css("color", "blue");
  $(".submenu span:empty").css("background", "red");
});
