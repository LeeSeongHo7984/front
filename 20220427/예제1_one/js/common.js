$(function(){
//script 영역 one 예
  // $("a").click(function(){
  //   // console.log($(this));
  //   $("a").removeClass("on"); // 기존 추가된 클래스를 초기화(삭제);
  //   $(this).addClass("on");
  //   let imgSrc = $(this).attr("href");
  //   $("img").attr("src", imgSrc);
  //   return false;
  // });
  let count = 0;
  $("a").one('click',function(){
    $("a").removeClass("on");
    $(this).addClass("on");
    $("img").attr("src", $(this).attr("href"));
    count++;
    return false;
  });

  // $("a").click(function(){
  //   return false;
  // });

});
