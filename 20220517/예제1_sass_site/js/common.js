$(function() {
  // console.log($("body"));
  // console.log(window.location.href);
  // console.log($(location).attr("href"));
  // 실습 :
  // #lnb의 메뉴와 같은 서프페이지의 주소값을 매칭하여
  // 해당 메뉴에 on class 추가하시오

  let currentHref = $(location).attr("href").split("/");
  currentHref = currentHref[currentHref.length-1].split(".");
  currentHref = currentHref[0];
  console.log(currentHref);

  $("#lnb ul li a").each(function() {
    let matchHref = $(this).attr("href").split("/");
    matchHref = matchHref[matchHref.length-1].split(".");
    matchHref = matchHref[0];
    if (matchHref == currentHref ) {
      $(this).addClass("on");
    }
  });

  // 실습 :
  // location href split 코드에서 공통부분을 함수화 하시오.
})
