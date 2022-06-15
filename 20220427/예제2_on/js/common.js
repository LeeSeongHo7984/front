$(function () {
// script 영역 one 예
  // $("a").click(function(){
  //   // console.log($(this));
  //   $("a").removeClass("on"); // 기존 모든 요소에 추가된 클래스를 초기화(삭제)
  //   $(this).addClass("on");
  //   $("img").attr("src",$(this).attr("href")) //호출해서 넣는다/
  //   return false;
  // });

  $("ul").on("click","a",function(){
    /* ul 요소에 추가 또는 변화되는 속성, 태그 등 document load 이후(dom 형성 후)의
    변화를 체크하여 스크립트에 적용할 수 있다.*/
    $("a").removeClass("on");
    $(this).addClass("on");
    $("img").attr("src",$(this).attr("href"));
    return false;
  });

  $("button").click(function(){
    /*
    ul 태그 내부에 자식요소의 첫번째 위치에 <li><a href="./img/img04.jpg"></a></li>
    위 태그 코드를 추가하시오.
    */
    $("ul").prepend("<li class='txt'><a href='./img/img04.jpg'>바다</li>")
  });
});
