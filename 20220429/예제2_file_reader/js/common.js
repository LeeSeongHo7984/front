$(function() {
  // script 영역
  $(":file").mouseenter(function () { // mouseover
    // 마우스 올렸을 때
    $(this).after("<p>업로드 가능한 파일의 용량은 300kb 입니다.");
  }).mouseleave(function() {  //mouseout
    $(this).next().remove();
  });

  // on
  // $(":file").on ( {
  //   mouseover: function() {
  //
  //   },
  //   mouseout: function() {
  //
  //   }
  // });

  $("#img-input").change(function () {  // 변경 시킬때는 change
    // console.log($(this));  // jquery object type으로 요소를 받음
    // console.log(this);  // dom 요소로 받음
    readURL(this);
  });

  function readURL(input) {
    // console.log(input.files[0]);
    if ( input.files && input.files[0] ) {  // 파일을 읽을 때 일반적으로 공식처럼 쓰는 문법
      // console.log("파일을 가져왔습니다");
      let reader = new FileReader();  // reader 객체 생성
      // console.log(reader);
      reader.readAsDataURL(input.files[0]);
      reader.onload = function(e) {
        console.log(e.target.result);
        $("#image-section").attr("src", e.target.result);
      }
    }
  }
});
