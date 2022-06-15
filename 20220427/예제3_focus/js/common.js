$(function() {
  // script 영역 focus 예
  // document.querySelector("input").value // javascript

  // method chain을 사용하여 입력한 값의 font-color를
  // #cccccc 으로 변경하시오.

  $("input").val("입력해주세요")
  .css("color", "#cccccc")
  .one("focus", function() {  // 초기 포커스 일 때 한번만 실행
    $(this).val("").css("color", "#000000");  // 마우스 클릭시 "입력해주세요"를 없애줌.
  })

  .blur(function() {  // focus out 일때를 의미한다.
    if ( $(this).val() == "" ) {
    $(this).val("입력해주세요").css("color", "#cccccc").one("focus", function() {
      $(this).val("").css("color", "#000000");
    });
    }
  });
});
