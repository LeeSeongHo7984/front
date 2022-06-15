$(function () {
// script 영역 file load 예
  $("#content").load("./load_file.html .section1"); // 초기화면 로드
  // $("ul li").click(function() {
  //   console.log($(this).index()); // click하는 요소의 index 값을 받아온다
  //   console.log($(this).attr("id"));
  //   let thisId = $(this).attr("id");
  //   if(thisId == "section1"){
  //     $("#content").load("./load_file.html .section1"); // id가 content인데다가 로드하겠다
  //   }else if(thisId == "section2"){
  //     $("#content").load("./load_file.html .section2");
  //   }else if(thisId == "section3"){
  //     $("#content").load("./load_file.html .section3");
  //   }
  // });

  /*
  실습:
  위 코드를 리팩토링하여 코드를 재작성하시오.
  */

    $("ul li").click(function() {
      let thisIndex = $(this).index() + 1;  // click하는 요소의 index 값을 받아온다
      let thisId = $(this).attr("id");
      if(thisId == `section${thisIndex}` ) {
        $("#content").load(`./load_file.html .section${thisIndex}`);
      }
    });
});
