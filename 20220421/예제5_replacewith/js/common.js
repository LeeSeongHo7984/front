$(function () {
  // script 영역 replaceWith() 사용예
  $("h2").replaceWith("<h2>remove</h2>");
  console.log($("h2").text());

  // p태그를 "<span class='box'>text box</span>"를
  // replaceWith로 변경하시오.

  $("p").replaceWith("<span class='box'>text box</span>");
  console.log($(".box").text());
  $(".box").remove();

  // 1. .items 태그를 "<a href='http://naver.com'></a>"로
  // replaceWith()를 사용하여 변경하시오
  //
  // 2. 변경된 a 태그를 remove()를 사용하여 제거하시오.

  $(".items").replaceWith("<a href='http://naver.com'></a>");
  $("a").remove();
});
