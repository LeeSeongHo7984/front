$(function () {
  // script 영역 wrap(), wrapAll(), wrapInner() 사용 예제
  // wrap() 특정 태그를 지정한 태그로 감싸는 method
  // $("strong").wrap("<h2></h2>");  // 선택한 요소를 개별로 감싼다

  // menu 클래스 태그의 자신 요소 span을 선택하고
  // "<a href="http://naver.com" target='_self'></a>" 로 감싸시오.
  // $(".menu span").wrap("<a href='http://naver.com' target='_self'></a>");

  // $("span").wrapAll("<header></header>")  // 선택한 요소들을 모아 전체를 감싼다

  // wrapAll() 주의 사항 : 선택한 모든 요소를 가지고 와서 감싸는 메서드이며 웹페이지 전체에 영향을
  //                       줄 수 있으므로 선택 시 구조를 명확히 하는 것이 필요.


  // wrapAll()
  // .wrap-all의 요소에 있는 p 태그들을 .item-wrap 클래스를 갖고 있는
  // div 태그로 wrapAll 메서드를 사용하여 감싸시오
  $(".wrap-all p").wrapAll("<div class='item-wrap'></div>");

  // .wrap-all의 요소에 있는 span 태그들을 span-wrap 클래스를 갖고 있는
  // div 태그로 wrapAll 메서드를 사용하여 감싸시오
  $(".wrap-all span").wrapAll("<div class='span-wrap'></div>")

  // .wrap-all의 요소에 있는 .items 태그들을 .div-items-wrap 클래스를 갖고 있는
  // div 태그로 wrapAll 메서드를 사용하여 감싸시오
  $(".wrap-all .items").wrapAll("<div class='div-items-wrap'></div>");

  // strong 태그들을 .title클래스를 갖고 있는
  // div 태그로 wrapAll 메서드를 사용하여 감싸시오
  $("strong").wrapAll("<div class='title'></div>");


  // wrapInner사용 시 선택한 요소의 자식 요소 모두를 특정 태그로 감싼다

  $(".wrapInner").wrapInner("<div class='inner'></div>");

  // .items의 자식요소들을 wrapInner을 사용하여
  // "<a href='http://daum.net'></a>"로 감싸시오.

  $(".wrapInner .items").wrapInner("<a href='http://daum.net'></a>");
});
