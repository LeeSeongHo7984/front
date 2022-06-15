"use strict"

$(function() {
  const intervalNum = 150;  // scroll내릴때 150만큼 추가해서 더 빠르게 red색상을 나타냄
  // script 영역

  // 실습 1:
  // back-to-top 요소를 클릭했을때 intro section으로 이동하는 코드를 아래에 추가하시오.
  $("nav ul li a, .back-to-top a, a.button, #footer ul li a").click(function() {
    // console.log(this.hash); // hash : html 값을 가져올 때
    // console.log($(this.hash).offset().top); //offset().top : 높이값 가져올때
    let thisHash = $(this.hash);

    // // 1번 애니메이션이 작동 될 때 여러번 클릭을 방지
    // let isAni = $("html,body").is(":animated");
    // if ( !isAni ) {
    //   $("html,body").animate({
    //     scrollTop : thisHash.offset().top},1500);
    // }

    //2번 즉시 scroll 대상 변경
    $("html,body").stop();
    // animate({,,,}) : 첫번째 속성값, 두번째 값 easing값 세번째 스피드값 네번째 콜백함수
    $("html,body").animate({scrollTop : thisHash.offset().top},1500);
    return false;
  });

  // 실습 2:
  // back-to-top요소(scroll 상단 이동버튼)가 window scroll top 값이 0이 아닐 때
  // on class를 추가하여 노출 시키시오.
  // window scroll top 값이 0일때는 on class를 삭제하시오.

  $(window).scroll(function() { // window scroll 영역
    // console.log($(this).scrollTop());
    let thisScrollTop = $(this).scrollTop();
    let backToTop = $(".back-to-top");

    if ( thisScrollTop == 0 ) {
      backToTop.removeClass("on")
    } else {
      backToTop.addClass("on")
    }
  });

  // 실습 3:
  // section offset method를 사용하여 window가 스크롤될때
  // 해당 section의 offset top window scrollTop 이 같고
  // section의 높이와 동일한 영역 안일때 해당 section에
  // active class를 추가하시오.

  let wHeight = $(window).height();
  $(window).scroll(function() {
    let thisScrollTop = $(this).scrollTop();
    console.log(thisScrollTop);
    $("section").each(function() {
      let thisElem = $(this);
      let thisOffset = $(this).offset();
      console.log(thisOffset);
      if ( thisOffset.top <= thisScrollTop + intervalNum && thisScrollTop <= thisOffset.top + wHeight ) {
        thisElem.addClass("active");
      }
    })
  })
}); // 끝
