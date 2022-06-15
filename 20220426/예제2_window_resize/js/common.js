$(function () {
  // script 영역 window resize 예

  // $("body").prepend("<div class='box'></div>");
  $(".box").each(function(){
    console.log($(this));
    let transSize = "+"; // 크기변화 전환
    let leftDir = "+"; // x축 방향 전환
    let topDir = "+"; // y축 방향 전환
    let speedNum = 1;
    const maxNum = 6;
    let thisElem = $(this);

    $(window).resize(function(){
      let thisOffset = thisElem.offset();
      console.log(thisOffset);

      // size 변화 조건식
      console.log(thisElem.width());
        if(thisElem.width() > 200){
          transSize = "-";
        }else if(thisElem.width() < 50){
          transSize = "+";
        }

      // x축 변화 조건식
        if(thisElem.offset().left > $(window).width() - thisElem.width()){
          leftDir = '-';
          speedNum = Math.ceil(Math.random()*10*speedNum); // random() : (0~0.9) * 10, 소수점 자리 삭제 : ceil round floor
          if(speedNum > maxNum){
            speedNum = maxNum-1;
          }
          thisElem.css('left', $(window).width() - thisElem.width());
        }else if(thisElem.offset().left < 0){
          leftDir = '+';
        }

      // y축 변화 조건식
        if(thisElem.offset().top > $(window).height() - thisElem.height()){
          topDir = '-';
          speedNum = Math.ceil(Math.random()*10*speedNum); // random() 0~0.9 * 10 ceil round floor 소수점 자리
          if(speedNum > maxNum){
            speedNum = maxNum-1;
          }
          thisElem.css('top', $(window).height() - thisElem.height());
        }else if (thisElem.offset().top < 0){
          topDir = '+';
        }

      // thisElem 최종 적용
        thisElem.css({"width": transSize+"=1px", "height": transSize+"=1px"});
        thisElem.css({"left": leftDir+"="+speedNum+"px","top": topDir+"="+speedNum+"px"})
    })
  })
});
