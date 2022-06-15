$(function () {
  // script 영역 animate() 사용
  boxNum = $(".flex-box .count");
  boxNum.each(function () {
    console.log($(this));
    // $(this).attr("src", "./img/...");
    // prop : 지정한 선택자를 가진 첫번째 요소의 속성값을 가져오거나 속성값을 추가
    $(this).prop("Counter", 0).animate({Counter: $(this).text()}, {
      duration: 4000,
      easing: "swing",
      step: function (now) {
        // console.log(now)
        console.log(Math.ceil(now));
        $(this).text(Math.ceil(now));
      },
      complete: function () {
        console.log("완료");
        $("body").css("background-color", "blueviolet");
      }
    });
    // console.log($(this).prop("Counter"));
  });

  // boxNum.animate({left: "100px"}, 4000, "swing", function() {
  //   alert("animation이 종료 되었습니다.");
  // })
});
