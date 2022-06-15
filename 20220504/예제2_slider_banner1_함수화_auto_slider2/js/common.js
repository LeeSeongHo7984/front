$(function() {
  // script 영역 slide banner 만들기 예제1
  const widthNum = 620; // slide 개별의 너비, carousel-inner의 너비를 계산할 수 있다.

  // ul의 개수 가져오기
  let ulLeng = $("#carousel-inner ul.column").length;
  // console.log(ulLeng);

  // ul 개수로 #carousel-inner 초기 너비 설정
  // console.log(widthNum * ulLeng);
  // $("#carousel-inner").css("width", widthNum * ulLeng);
  $("#carousel-inner").width(widthNum * ulLeng);


  // 슬라이드 포지션 초기화
    $("#carousel-inner ul.column:last").prependTo("#carousel-inner");
    $("#carousel-inner").css("margin-left",-widthNum);


  // 슬라이드 포지션 초기화 함수
  function initalFunc(init) {
    $("#carousel-inner").css("margin-left", -widthNum);
    if ( init === "prev" ) {
      $("#carousel-inner ul.column:last").prependTo("#carousel-inner");
    } else if ( init == "next" ) {
      $("#carousel-inner ul.column:first").appendTo("#carousel-inner");
    }
  }


  // prev, next button script를 하나의 함수로 구현하시오.
  function actionBtn(el) {  // 버튼 클릭 함수 선언문
    el.click(function () {
      let caroInner = $("#carousel-inner");
      let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
      let isAni = caroInner.is(":animated");
      // console.log(isAni);
      if ( !isAni ) {
        if(el.attr("id") === "carousel-prev") {
        caroInner.animate({marginLeft: caInMarginLeft + widthNum},"slow","swing", function() {
          initalFunc("prev");
          });
        } else {
          caroInner.animate({marginLeft: caInMarginLeft - widthNum},"slow","swing", function() {
            initalFunc("next");
          });
        }
      }
    });
  };

  $(".btn").each(function() {
    actionBtn($(this)); // 버튼 클릭 함수 실행문
  })



  // // prev button script
  // $("#carousel-prev").click(function() {
  //   let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
  //   $("#carousel-prev, #carousel-next").hide(); // hide : display none과 같은 뜻
  //   $("#carousel-inner").animate({marginLeft: caInMarginLeft + widthNum},"slow","swing", function() {
  //     // animation 실행이 끝난 직후 실행 영역
  //     initalFunc("prev");
  //     $("#carousel-prev, #carousel-next").show();
  //   });
  // });


  // // next button script
  // $("#carousel-next").click(function() {
  //   let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
  //   $("#carousel-prev, #carousel-next").hide(); // hide : display none과 같은 뜻
  //   $("#carousel-inner").animate({marginLeft: caInMarginLeft - widthNum},"slow","swing", function() {
  //     // animation 실행이 끝난 직후 실행 영역
  //     initalFunc("next");
  //     $("#carousel-prev, #carousel-next").show();
  //   });
  // });


  // auto slide
  let timerID = null;
  let auto = function() {
    timerID = setInterval(function(){
      console.log("slide!!");
      $("#carousel-next").trigger("click");
    }, 3000);
    return timerID;
  }

  auto();
  console.log(timerID);

  // 아래 mouseenter, mouseleave mothod를 on method를 사용하여
  // 작성하시오.

  $("#carousel, #carousel-prev, #carousel-next").on({
    mouseenter : function() {
      clearInterval(timerID);
    },
    mouseleave : function() {
      timerID = setInterval(function() {
        $("#carousel-next").trigger("click");
    }, 5000);
  });


  // $("#carousel, #carousel-prev,#carousel-next").mouseenter(function(){
  //   clearInterval(timerID);
  // }).mouseleave(function(){
  //   timerID = setInterval(function(){
  //     $("#carousel-next").trigger("click");
  //   }, 3000);
  // });

}); // document ready
