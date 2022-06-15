// 체크박스 전체선택 함수

function allCheckFunc(btn, elem) {
    btn.toggleClass("all");
    if(btn.hasClass("all")) {
    btn.text("전체해제");
    elem.prop("checked", true);
  } else {
    btn.text("전체선택"); // 클래스 all이 없어질때 텍스트를 전체선택으로 바꿈
    elem.prop("checked", false);
  }
}
