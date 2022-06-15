$(function () {
  // script 영역 input disabled 예
  $("select").change(function () {
    // console.log($(this)[0][3]);
    // console.log($(this)[0][$(this)[0].length-1]);
    // console.log($(this).val());
    console.log($(":selected").attr("value"));

    // 실습
    // 10대 일때는 input text field 를 비활성화 하고
    // 10대가 아닐때는 input text field를 활성화 하시오.
    // removeAttr("") : attrbute 삭제

    if ( $(":selected").attr("value") == "10대" ) {  // 선택이 되었을때 : selected
      $("input").attr("disabled", true);
        // $("input").attr("disabled", "disabled");
    } else {
      $("input").removeAttr("disabled");
    }
  });
});
