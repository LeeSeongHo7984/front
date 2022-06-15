$(function () {
  // script영역 all selected 예

  // 1번: click event, attr ()
    // $("button").click(function () {
    //   // console.log($("input[type=checkbox]").attr("checked"));
    //   // $("input[type=checkbox]").attr("checked");
    //   $(":checkbox").attr("checked", "checked");
    // })

  // 2번: on method, prop을 사용()
  // function allCheckFunc(btn, elem) {
  //     btn.toggleClass("all");
  //     if(btn.hasClass("all")) {
  //     btn.text("전체해제");
  //     elem.prop("checked", true);
  //   } else {
  //     btn.text("전체선택"); // 클래스 all이 없어질때 텍스트를 전체선택으로 바꿈
  //     elem.prop("checked", false);
  //   }
  // }

  $("body").on("click", "button", function () {
    // // console.log("checked!!");
    // // $(":checkbox").attr("checked", "checked");
    // // $(":checkbox").prop("checked", true);
    // // console.log($(":checkbox").attr("checked", true));
    // $(":checkbox").each(function() {
    //   if( $(this).is(":checked")) {
    //     $(this).prop("checked", false); // 체크 해제
    //   } else {
    //     $(this).prop("checked", true);  // 체크
    //   }
    // })

    // // 실습:
    // // 전체 선택 버튼을 all 클래스를 추가하여 checkbox를 모두 선택하고
    // // 버튼텍스트는 "전체 해제"로 변경 전체 해제 버튼을 클릭하면 all을
    // // 제거하고 checkbox를 모두 선택 해제하는 로직을 구현 하시오.
    // // toggleClass, hasClass, text, prop 사용
    // //
    // // console.log($(this)); // button값이 나옴
    // // toggle는 on, off 기능으로 생각하면 됨
    // $(this).toggleClass("all"); // toggleClass("all") : button에 all클래스가 없으면 추가, 있으면 제거
    //
    // if( $(this).hasClass("all")) {  // hasClass("all") : all이라는 클래스를 가지고 있을때
    //   $(this).text("전체해제"); // 클래스 all을 가질때 텍스트를 전체해제로 바꿈
    //   $(":checkbox").prop("checked", true);
    // } else {
    //   $(this).text("전체선택"); // 클래스 all이 없어질때 텍스트를 전체선택으로 바꿈
    //   $(":checkbox").prop("checked", false);
    // }
    allCheckFunc($("button"),$(":checkbox"))
  });
});
