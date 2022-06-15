$(function () {
  $("#navi a").click(function(){
    let imgSrc = $(this).attr("href");
    let checkAni = $("#main img:last").is(":animated")

      $("#main img:last").animate({opacity: 0},{
        duration: 1000,
        easing: "swing",
        start: function(){
          $("#main img").before(`<img src="${imgSrc}">`)
        },
        complete: function(){
          $(this).remove()
        }
      })
    return false;
  });

  // prev, next 버튼으로 작동하는 스크립트
  let marginLeftNum = $("#navi .page-wrap").css("margin-left");
  const marginNumber = 300;

  function pagingBtnFunc(el) {
    el.click(function(){
      marginLeftNum = parseInt($("#navi .page-wrap").css("margin-left"));
      console.log(`애니메이션 진행전 : ${marginLeftNum}`);
      let isAni = $("#navi .page-wrap").is(":animated");  // 버튼 빠르게 클릭시 stop하는 문법
      // console.log(isAni);
      if( isAni == false ) {  // 부정어 표기 : !isAni 와 같은 의미
        if ( $(el).hasClass("next") && marginLeftNum > -(marginNumber*2) ) {
          $("#navi .page-wrap").animate({marginLeft: marginLeftNum - marginNumber},"fast");
        } else if ( $(el).hasClass("prev") && marginLeftNum < 0 ) {
          $("#navi .page-wrap").animate({marginLeft: marginLeftNum + marginNumber},"fast");
        } else if ( marginLeftNum == -(marginNumber * 2 ) || marginLeftNum == 0 ) {
          alert("더 이상 이미지가 없습니다");
      }
    }
  });
}

  $(".btn").each(function(){
    pagingBtnFunc($(this));
  });

  // $("img.next").click(function () {
  //   marginLeftNum = $("#navi .page-wrap").css("margin-left");
  //   $("#navi .page-wrap").animate({marginLeft: parseInt(marginLeftNum) - marginNumber},"fast",function() {
  //     console.log($("#navi .page-wrap").css("margin-left"));
  //   });
  // });
  //
  // $("img.prev").click(function () {
  //   marginLeftNum = $("#navi .page-wrap").css("margin-left");
  //   $("#navi .page-wrap").animate({marginLeft: parseInt(marginLeftNum) + marginNumber},"fast",function() {
  //     console.log($("#navi .page-wrap").css("margin-left"));
  //   });
  // });

  /*
  실습:
  1. prev, next 버튼을 함수화하여 로직을 구성하시오.
  2. page 별로 존재하는 prev next 버튼을 하나로 만들고
  if 조건문으로 #navi .page-wrap margin-left 값(0,600)을 체크하여
  로직을 구현하시오.
  */


}); // document ready
