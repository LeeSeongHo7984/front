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
  const marginNumber = 600; // const: 재할당 할 일이 없을때 쓰는 변수
  const pwElem = $("#navi .page-wrap");
  const pageLeng = $("#navi .page-wrap .page").length;  // page 개수로 범위 지정
  console.log(marginNumber * pageLeng);
  $(pwElem).width(marginNumber * pageLeng); // .page의 length 값을 가져와서 .page-wrap 초기 너비 값을 설정

  function pagingBtnFunc(el) {
    el.click(function(){
      console.log(pageLeng);
      let marginLeftNum = parseInt(pwElem.css("margin-left"));
      let isAni = pwElem.is(":animated");  // 버튼 빠르게 클릭시 stop하는 문법
      if( isAni == false ) {  // 부정어 표기 : !isAni 와 같은 의미
        if ( $(el).hasClass("next") && marginLeftNum > - (marginNumber * (pageLeng - 1))) {
          pwElem.animate({marginLeft: marginLeftNum - marginNumber},"fast");  // "fast" : 애니메이션 속도
        } else if ( $(el).hasClass("prev") && marginLeftNum < 0 ) {
          pwElem.animate({marginLeft: marginLeftNum + marginNumber},"fast");
        } else if ( marginLeftNum == -(marginNumber * (pageLeng - 1 )) || marginLeftNum == 0 ) {
          alert("더 이상 이미지가 없습니다");
      }
    }
  });
}

  $(".btn").each(function(){
    pagingBtnFunc($(this));
  });
}); // document ready
