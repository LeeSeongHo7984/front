$(function() {
  // script 실행 영역
  $(window).scroll(function() {
    let winHeight = $(window).height() - 70;
    let scTop = $(this).scrollTop();
    let navBar = $("nav");
    // console.log(winHeight);
    // console.log($(this).scrollTop());
    // console.log("test");
    // if 구문으로 구현하시오.
    if ( scTop > winHeight ) {
      navBar.addClass("fixed");
    } else {
      navBar.removeClass("fixed");
    }
  });
});
