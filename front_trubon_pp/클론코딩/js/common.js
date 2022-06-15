"use strict"

// 스크롤바 내릴때 200 초과 클래스 추가, 200 미만 클래스 제거해서 헤더 표시
$(function() {
  $(window).on("resize load scroll", function() {
    let windowTop = $(window).scrollTop();
    if( windowTop > 200 ) {
      $("header").addClass("on");
    } else {
      $("header").removeClass("on");
    }
  })

  // 메뉴 mouseover, mouseleave 시 열고 닫히는 기능
  $("#gnb, .gnbbg").on({
    mouseover: function() {
      $("header").addClass("top_bar_fix");
      $("#gnb ul, gnbbg").stop().slideDown(300);
    },
    mouseleave : function() {
      $("header").removeClass("top_bar_fix");
      $("#gnb ul, .gnbbg").stop().slideUp(200);
    },
    mouseout : function() {
      $("header").removeClass("top_bar_fix");
      $("#gnb ul, .gnbbg").stop().slideUp(200);
    }
  });


}); //script
