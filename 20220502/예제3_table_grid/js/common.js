$(function() {
  let thisIndex = 0;
  // $("td").mouseover(function () {
  //   thisIndex = $(this).index() + 1;
  //   // console.log(thisIndex);
  //   $("td:nth-child("+thisIndex+")").addClass("hover");
  // }).mouseout(function() {
  //   thisIndex = $(this).index() + 1;
  //   $("td:nth-child("+thisIndex+")").removeClass("hover");
  // });

  // $("td").mouseenter(function () {
  //   thisIndex = $(this).index() + 1;
  //   // console.log(thisIndex);
  //   $("td:nth-child("+thisIndex+")").addClass("hover");
  // }).mouseleave(function() {
  //   thisIndex = $(this).index() + 1;
  //   $("td:nth-child("+thisIndex+")").removeClass("hover");
  // });

  $("td").on({  // 객체 형태
    mouseenter: function() {
      thisIndex = $(this).index();
      // $("td:nth-child("+thisIndex+")").addClass("hover");
      $("table tr").each(function () {
        console.log($(this).find("td").eq(1));  // eq : equals
        $(this).find("td").eq(thisIndex).addClass("hover");
      })
    },
    mouseleave: function() {
      thisIndex = $(this).index();
      // $("td:nth-child("+thisIndex+")").removeClass("hover");
      $("table tr").each(function () {
        // console.log($(this).find("td").eq(1));  // eq : equals
        $(this).find("td").eq(thisIndex).removeClass("hover");
    });
    }
  });
}); // documnet ready
