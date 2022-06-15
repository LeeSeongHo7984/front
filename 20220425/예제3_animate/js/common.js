$(function () {
    // script 영역 animate() 사용 예
    // let count = 0;
    $("button").click(function () { // 버튼을 클릭했을 때 실행
      // 수치 증가 복합 대입연산 사용 방법
      // $(".box").css("left", count);
      // count++;
      // $(".box").animate(변화된값, duration, timmingfunc, function(){
      //   첫번째 인자: 변화된 값
      //   두번째 인자: 경과(지속) 시간 string, number
      //   세번째 인자: 변화 곡선 (timmingfunction) : string
      //   네번째 인자: 애니메이션이 종료된 시점에서 실행되는 함수
      console.log($(".box:animated"));
      $(".box:animated").stop();  // 여러번 클릭시 마우스를 뗐을 때 바로 멈춤
      $(".box").animate({left: '+=10px', top:'+=10px'});

      // css style 다중 적용
      // $(".box").animate({
      //   left: "250px;",
      //   opacity: "0.5",
      //   height: "150px",
      //   width: "150px"
      // });

      // toggle 사용방법
      // elem.toggle(); : toggle는 on, off기능
      // $(".box").animate({height: "toggle", width: "toggle"});
      // $(".box").animate({
      //   top: "toggle",
      //   left: "toggle"
      // });

      // animate 다중 사용
      // let elem = $(".box");
      // default : 0.4초, fast : 0.2초, slow : 0.6초
      // elem.animate({height: "300px", opacity: "0.4"}, "slow");
      // elem.animate({width: "300px", opacity: "0.8"}, "slow");
      // elem.animate({height: "100px", opacity: "0.4"}, "slow");
      // elem.animate({width: "100px", opacity: "0.8"}, "slow");
      // 동일한 요소가 animate를 여러번 작동시킬 경우
      // 먼저 실행한 animate가 종료된 후 다음 animate가 작동된다.

      // animate 재귀함수 사용
      // function aniBox () {
      //   $(".box").animate({height: "+=10px",
      //   width: "+=10px"},
      //   1000, "swing", aniBox);
      // }
      // aniBox();
    });
  });
