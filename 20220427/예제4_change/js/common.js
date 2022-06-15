$(function () {
  // script change 예

  // prev(),next() method를 활용하여 변경된
  // select 값을 해당 input 값에 입력하시오.
  // ex) elem.find("a")

  // A type
  // $("select").change(function () {
  //   let thisVal = $(this).val();
  //   // console.log(thisVal);
  //   // $("input").val(thisVal);
  //   console.log($(this).next());
  //   $(this).next().find("input").val(thisVal);
  // });

  // $("input.inputtest").change(function () {
  //   alert(`input text가 ${$(this).val()}로 변경되었습니다.`);
  // })

  // B type
  $("select").change(function () {
    let thisVal = $(this).val();
    if( $(this).hasClass("family-site") ) {
    // window.location.href = thisVal; // javascript 형식
    $(location).attr("href", thisVal);  // jquery 형식
  } else {
    $(this).next().find("input").val(thisVal);
  }
    // console.log(thisVal);
  });

  // A type 과 B type을 change method 내부에서
  // if구문을 사용하여 구현하시오
  // 힌트 : hasClass("family-site") 사용


});
