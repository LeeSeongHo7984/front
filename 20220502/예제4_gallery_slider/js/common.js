$(function () {
  $("#navi a").click(function(){
    let imgSrc = $(this).attr("href");
    let checkAni = $("#main img:last").is(":animated")
    // console.log(checkAni);
    // if (chieAni) {
    //   $("#main img:last").stop().css("opacity",0);
    //   $("main img:last").remove();
    //   $("main img").attt("src",imgSrc)
    // }
    // else{
    //   $("#main img").before(`<img src="${imgSrc}">`)
    //   $("#main img:last").animate({opacity: 0},{
    //     duration: 1000,
    //     easing: "swing",
    //     complete: function(){
    //       $(this).remove()
    //     }
    //   })
    // }

      $("#main img:last").animate({opacity: 0},{
        duration: 1000,
        easing: "swing",
        start: function(){
          $("#main img").before(`<img src="${imgSrc}">`)
        },
        complete: function(){
          $(this).remove()
        }
      })
    return false;
  });

  // // prev, next 버튼으로 작동하는 스크립트
  let marginLeftNum = $("#navi .page-wrap").css("margin-left");
  // // console.log(parseInt(marginLeftNum)); // parseInt 정수형 표시
  const marginNumber = 300;
  // $("img.next").click(function () {
  //   marginLeftNum = $("#navi .page-wrap").css("margin-left");
  //   $("#navi .page-wrap").animate({ // animate에서는 jquery 형식으로 표현
  //     marginLeft: parseInt(marginLeftNum) - marginNumber
  //   },
  //   "fast",
  //   function() {
  //     console.log($("#navi .page-wrap").css("margin-left"));
  //   });
  // });
  //
  $("img.prev").click(function () {
    marginLeftNum = $("#navi .page-wrap").css("margin-left");
    $("#navi .page-wrap").animate({ // animate에서는 jquery 형식으로 표현
      marginLeft: parseInt(marginLeftNum) + marginNumber
    },
    "fast",
    function() {
      console.log($("#navi .page-wrap").css("margin-left"));
    });
  });

  // if( $("img.next").click(function())) {
  //   marginLeft: parseInt(marginLeftNum) - marginNumber;
  // } else if ( $("img.prev").click( function())) {
  //   margin: parseInt(marginLeftNum) + marginNumber;
  // }; // 코드 지우기

}); // document ready
