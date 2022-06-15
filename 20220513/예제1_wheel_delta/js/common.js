'use strict';

$(function() {
  let windowHeight = $(window).innerHeight(); //화면 높이 값
  let direc = 0;  //방향 전환을 위한 변수 정의
  const maxDirec = $(".wheel-wrap section").length - 1;
  let wheelAction = false;

  function wheelAnimate() {
    $("html").animate({scrollTop: direc * windowHeight},{
      duration: 1000,
      start: function(){
        wheelAction = true;
      },
      complete: function(){
        wheelAction = false;
      }
    });
  }

  wheelAnimate();
  $(window).on("wheel",function(event) {
    // console.log(event.originalEvent.wheelDelta);
    let eventDelta = event.originalEvent.wheelDelta;
    if ( eventDelta > 0 && wheelAction == false ) {
      if ( direc <= 0 ) {
        direc = 0;
      } else {
        direc--;
        wheelAnimate();
      }
    }
    else if ( eventDelta < 0 && wheelAction == false ) {
      if (direc >= maxDirec ) {
        direc = maxDirec;
      } else {
        direc++;
        wheelAnimate();
      }
    }
  });
});
