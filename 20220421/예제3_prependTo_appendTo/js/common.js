$(function () {
  // // script 영역 prependTo(), appendTo() 사용 예
  // $("strong").prependTo("p");
  // $(".items:last-child").prependTo("#wrap");
  // $(".items:nth-child(3)").appendTo("#wrap");
  // console.log($(".items:nth-child(2)").text());
  // console.log($(".items").eq(1).text());

  // insertBefor(), insertAfter() 사용 예
  $("#wrap").insertBefore("p");

  // items5를 items3 바로 앞으로 이동시키세요.
  $(".items:nth-child(5)").insertBefore(".items:nth-child(3)");
  // items5를 추가하면 index 값이 변경 되어서 nth-child 값도 변경 된다
  // strong 태그를 items3 자리 뒤로 이동 시키세요.
  $("strong").insertAfter(".items:nth-child(4)");
  // $("strong").insertBefore(".items:nth-child(5)");
});
