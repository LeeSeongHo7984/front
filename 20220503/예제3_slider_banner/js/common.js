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

  // prev button script
  $("#carousel-prev").click(function() {
    let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
    $("#carousel-prev, #carousel-next").hide(); // hide : display none과 같은 뜻
    $("#carousel-inner").animate({marginLeft: caInMarginLeft + widthNum},"slow","swing", function() {
      // animation 실행이 끝난 직후 실행 영역
      initalFunc("prev");
      $("#carousel-prev, #carousel-next").show();
    });
  });

  // next button script
  $("#carousel-next").click(function() {
    let caInMarginLeft = parseInt($("#carousel-inner").css("margin-left"));
    $("#carousel-prev, #carousel-next").hide(); // hide : display none과 같은 뜻
    $("#carousel-inner").animate({marginLeft: caInMarginLeft - widthNum},"slow","swing", function() {
      // animation 실행이 끝난 직후 실행 영역
      initalFunc("next");
      $("#carousel-prev, #carousel-next").show();
    });
  });

  // prev, next 버튼 작동 스크립트

  function
});
