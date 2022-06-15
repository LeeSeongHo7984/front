$(function(){
  let wHeight = $(window).height();
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();
    $(".slide").each(function(){
      let bodyBg = $(this).data("background");
      let thisOffset = $(this).offset();
      if( thisOffset.top <= thisScrollTop && thisScrollTop < thisOffset.top + wHeight ){
          $("body").css("background-color", bodyBg);
      }
    });
    let navBar = $("nav");
    if( thisScrollTop > wHeight - 70 ){
      navBar.addClass("fixed");
    }else{
      navBar.removeClass("fixed");
    }
  });
});
