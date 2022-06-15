$(function(){
// script 영역 file load paging 예
  // let winHref = window.location.href;
  // console.log(winHref);
  // let href = winHref.split(".")[0].split("/")[4];  // 내가 한 split
  // console.log(href);

  let hrefNum = window.location.href;
  let splitNum = hrefNum.split("ing/");
  let pageTxtSplit = splitNum[splitNum.length-1].split(".");
  let pageText = pageTxtSplit[0];

  $("header").load("./header.html .inner", function() {
    // 로드완료 후 실행
    $("#gnb ul li").each (function () {
      // console.log($(this).text());
      if ( $(this).text() == pageText ) {
        $(this).addClass("on");
      }
    });
  });
  $("footer").load("./footer.html .inner");

  // 실습:
  // 1단계 :
  // window location href 값을 가져오고 split를 사용하여
  // 해당페이지를 인식할 수 있는 스트링 값으로 현재페이지 동일한
  // introduce, gallery, community

  // 2단계:
  // gnb li 요소에 'on' 클래스를 추가하시오.

  // split(".")[0]으로 하면 .앞이랑 뒤로 나뉘는데 0번째가 선택됨
  // split("/")[4]는 앞에 .으로 자른 값에 / 4번째

});
