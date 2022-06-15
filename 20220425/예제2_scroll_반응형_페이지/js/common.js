$(function () {
  $(window).scroll(function() {
    console.log(`${$(this).height()}, ${$(this).scrollTop()}`);
    let winHeight = $(this).height();  //window 창의 높이를 가져온다
    let thisScrollTop = $(this).scrollTop();  // window 창 scroll top 값을 가져온다, 스크롤 현재 위치를 가르킴

    $(".slide").each(function () {  // each는 for문과 비슷
      let thisOffset = $(this).offset();
      console.log($(thisOffset.top));

      // if ( 0 <= thisScrollTop && thisScrollTop < 920 ) {
        // console.log($(this).find("h2").text());
      // } else if ( 920 <= thisScrollTop && thisScrollTop < 1840 ) {
      //
      // }

      // slide 구간을 if 구문으로 체크하고 각 구간 마다 h2의
      // 텍스트를 log에 출력하시오.

      if( thisOffset.top <= thisScrollTop && thisScrollTop < thisOffset.top + winHeight / 3 ) {
      // console.log($(this).find("h2").text());
      // console.log($(this).data("background"));

      // body 요소에 background-color 값을
      // $(this).slide 요소의 data-background 값으로 변경하시오.
      let bodyBg = $(this).data("background");
      $("body").css("background-color", bodyBg);
      $(this).addClass("on");
    }
  });

  // scroll method를 사용하여 scrolltop의 값이
  // 첫번째 slide 높이값(window 높이값) 보다 클때 nav 태그에
  // fixed 클래스를 추가하시오.

    let navBar = $("nav");
    if ( thisScrollTop > winHeight - 70 ) {
      navBar.addClass("fixed");
    } else {
      navBar.removeClass("fixed");
    }
  });
});
