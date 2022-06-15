$(function () {
  // script 영역 ajax 사용 예
  $.ajax({
    url: "data.xml",
    dataType: "xml",
    success: function(data) {
      // 실행구문
      // console.log($("item", data));

      // 실습
      // 데이터의 item 요소를 개별로 추출하고
      // 아래와 같이 개별로 dl의 내부 영역에 삽입하시오.
      // dt : xml파일 내부 item의 title
      // dt a href : xml파일 내부 item의 link
      // dd : xml파일 내부 item의 description
      // <dt><a href="http://daum.net">"우주에서 쉼쉰다." 지구 밖 '산소분자' 최초 발견</a></dt>
      // <dd>지구를 떠나서 우주에서 숨을 쉬는 일이(중략) 설명했다.</dd>
      // hint
      // 1. for or each method 사용
      // 2. data 정보를 tag와 조합
      // 3. append, prepend or string type의 빈 변수에 복합대입연산으로 추가가능

      // $(data).find("item").each(function () { // 개별추출
      //   console.log($(this).find("link").text());
      //   console.log($(this).find("title").text());
      //   console.log($(this).find("description").text());
      // })

      // let ahtml = '';
      $("item", data).each(function() {
        // console.log($("link", this).text());
        // console.log($("title", this).text());
        // console.log($("description", this).text());

        let linkText = $("link", this).text();
        let titleText = $("title", this).text();
        let desText = $("description", this).text();
        $("dl").append(`<dt><a href=${linkText}>${titleText}</a></dt><dd>${desText}</dd>`);
      });
      // $("dl").html(ahtml)
    }
  });

  // 기사내용 click event로 노출
    $("button").on("click", function() {  // 무조건 외우기 (toggle)
      // $(this).toggleClass("on"); // toggle 방법

      // let thisClass = $(this).attr("class"); // 속성 값을 가져오거나 추가하는 방법 attr(attribute)
      // if( thisClass == "" || thisClass == undefined ) {
      //   $(this).addClass("on");
      // } else {
      //   $(this).removeClass("on");
      // }

      // if( $(this).hasClass("on") ) {  // on 이라는 클래스가 있는지 확인하는 방법 (hasClass)
      //   $(this).removeClass("on");
      // } else {
      //   $(this).addClass("on");
      // }

      //삼항 조건식
      $(this).hasClass("on")? $(this).removeClass("on") : $(this).addClass("on");
    })
  }); // ducoument ready
