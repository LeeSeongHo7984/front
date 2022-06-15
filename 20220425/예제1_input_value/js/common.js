$(function () {
  // script 영역 input value 사용 예
  let pHtml = $("p").html();
  // console.log(pHtml);

  $("button").click(function () {
      // console.log("click!!");
      let btnNum = $(this);
      // console.log(btnNum);
      // elem.innerText : javascript
      if ( btnNum.text() == "확인" ) {
        // console.log("이버튼은 확인 버튼입니다.");
        let inputVal = $("input").val();
        // console.log(inputVal);
        $("p").text(`${inputVal}로 전송이 됩니다. 전송을 원하시면 전송 버튼을 눌러주세요.`);
        // console.log(`확인 전: ${btnNum.text()}`);
        btnNum.text("전송");
        // console.log(`확인 후: ${btnNum.text()}`);

        // forEach : javascript
        // each : jquery

        // each를 사용해서 버튼의 첫번째 요소의
        // 텍스트를 '전송'으로 변경
        // $("button").each ( function (i) {
        //   if( i == 0 ) {
        //     $(this).text("전송");
        //   }
        // });

      } else if ( btnNum.text() == "reset" ) {
        // console.log("이버튼은 reset 버튼입니다.");
        // html(p태그 내부) 초기화

        // 1번 방법 : 직접입력 (reset)
        // $("p").html("E-mail : <input type='e-mail' name='name'>");

        // 2번 방법 : 초기 로드 시 html을 변수로 담는다 (reset)
        $("p").text(pHtml);

        // 버튼의 초기화 텍스트
        console.log("현재 텍스트는 확인 입니다.");

        // 1번 방법 each 활용
        // $("button").each( function (i) {
        //   if ( i == 0 && $(this).text() == "전송" ) {
        //     // console.log("현재 텍스트는 전송 입니다.");
        //     $(this).text("확인");
        //   }
        // });

        // 2번 방법 prev()
      let btnNumPrev = btnNum.prev();
      if ( btnNumPrev.text() == "전송" ) {
          console.log("현재 텍스트는 전송 입니다.");
          btnNum.prev().text("확인");
        }
      } else if ( btnNum.text() == "전송" ) {
        $("p").text("전송이 완료 되었습니다.");
        // alert("전송이 완료 되었습니다.");

        // javascript
        // window.location.href = "http://naver.com";

        // jquery
        // $(location).attr("href", "http://naver.com");
      }
  });
});
