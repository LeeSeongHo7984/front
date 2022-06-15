"use stirct"

$(function() {
  $(".wrap").each(function(i) {
    let thisWrap = $(this); // 현재 .wrap을 가져오기
    let itemsNum = thisWrap.find(".items"); // 현재 wrap의 items 선택
    // let itemsNum = $("items", this);
    let itemsLeng = itemsNum.length;  // items에 길이값을 가져옴

    itemsNum.mouseenter(function() {  // mouseenter : 마우스를 items에 올렸을 때
      // mouseenter 시 실행구문
      let thisIndex = $(this).index();  // 여기서 this는 items임!
      // console.log(thisIndex);
      $(this).addClass("on");
      if ( thisIndex == 0 ) {
        thisWrap.css("margin-left", "0px");
      } else if ( thisIndex == itemsLeng - 1 ) {
        thisWrap.css("margin-left", "-100px");
      } else {
        thisWrap.css("margin-left", "-50px");
      }
    }).mouseleave(function() {  // mouseleave : 마우스가 items에서 떠났을 때
      itemsNum.removeClass("on");
      thisWrap.css("margin-left", "0px"); // margin-left를 다시 원래 값으로 돌려줘야함
    })
  })
});
