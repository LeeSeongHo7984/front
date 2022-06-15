$(function() {
  // script 영역 slide banner2 만들기 예제

  const widthNum = 150; // slide li 개별 너비, ul.column의 너비를 계산할 수 있다.
  const caInner = $("#carousel-inner");

  // li 개수 가져오기
  // let liLeng = caInner.find("ul.column li").length; // li의 개수 가져오기
  let liLeng = $("ul.column li", caInner).length; // li의 개수 가져오기

  // li의 개수로 ul.column의 너비를 설정
  $("ul.column", caInner).css("width", widthNum*liLeng);

  // 슬라이드 포지션 초기화
  // 1번)
  // ul.column의 마지막 li를 ul.column의 첫번째 자식요소로 이동
  // 2번)
  // ul.column의 초기 슬라이드 위치로 이동하여라

  function initalFunc(init) {
    caInner.css("margin-left" , -widthNum);
    if( init == "prev" ) {
      $("ul.column li:last", caInner).prependTo("#carousel-inner ul.column");
    } else {
      $("ul.column li:first", caInner).appendTo("#carousel-inner ul.column");
    }
  }

  initalFunc("prev");

  function actionBtn(el) {  // 버튼 클릭 함수 선언문
    el.click(function () {
      let caInMarginLeft = parseInt(caInner.css("margin-left"));
      let isAni = caInner.is(":animated");
      if ( !isAni ) {
        if(el.attr("id") === "carousel-prev") {
        caInner.animate({marginLeft: caInMarginLeft + widthNum},"slow","swing", function() {
          initalFunc("prev");
          });
        } else {
          caInner.animate({marginLeft: caInMarginLeft - widthNum},"slow","swing", function() {
            initalFunc("next");
          });
        }
      }
    });
  };

  $(".btn").each(function() {
    actionBtn($(this));
  });

  // // next button script
  // $("#carousel-prev").click(function() {
  //   let carInMarginLeft = parseInt(caInner.css("margin-left"));  // margin-left 값
  //   // console.log(carInMarginLeft);
  //   let isAni = caInner.is(":animated");
  //   if ( !isAni ) {
  //     caInner.animate({marginLeft: carInMarginLeft + widthNum}, "slow", function() {
  //       caInner.css("margin-left", - widthNum);
  //       $("ul li:last", caInner).prependTo("#carousel-inner ul.column")
  //     });
  //   }
  // })
  //
  // // next button script
  // $("#carousel-next").click(function(){
  //   let carInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));  // margin-left 값
  //   let isAni = $("#carousel-inner").is(":animated");
  //   if ( !isAni ) {
  //     $("#carousel-inner").animate({marginLeft : carInMarginLeft - widthNum},"slow",function(){
  //       $("#carousel-inner").css("margin-left" , - widthNum);
  //       $("#carousel-inner ul li:first").appendTo("#carousel-inner ul.column");
  //     });
  //   }
  // });

}); // document ready
