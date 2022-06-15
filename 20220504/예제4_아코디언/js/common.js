$(function() {
  // script 영역 아코디언 UI 인터렉션 예제

  $("dd:not(:first)").css({
    "display" : "none",
    "height" : 0
  });

  $("dl dt").click(function(){
    let thisElem = $(this);
    let isAni = $("dd").is(":animated"); // 동작 도중에는 true 반환 , 클릭 직전까지 false 반환
    console.log(isAni);
    if ( !isAni ) {
      if( $("+dd",this).css("display") == "none" ) {
        // $("dd").slideUp("slow");
        // $("+dd",this).slideDown("slow");
        $("dd").each(function(){ // this 는 funtion 앞에 $() 안에 있는 놈을 의미함
          $(this).animate({ height : 0 }, "slow",function(){
            $(this).css("display","none");
            $("+dd",thisElem).css("display","block").animate({ height : 300},"slow");
          });
        });
      }
    }
  });

  /*
  animate 메소드를 사용하여 dt click event를 구현하시오.
  */



}); // document ready
