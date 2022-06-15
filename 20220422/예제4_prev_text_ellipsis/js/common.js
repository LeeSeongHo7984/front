$(function () {
  // script 영역 prev toggle 사용 예
  let elem = $(".more-text");
  const showText = 100; // 총 글자수 중 100 글자
  let moreBtnText = "Show More";
  let lessBtnText = "Show Less";
  let content = elem.html();
  let contentLeng = content.length  // 총 글자수
  let lessText = content.substr(0, showText); // 화면이 줄어들때 보여지는 텍스트
  let moreText = content.substr(showText, contentLeng); // 화면이 줄어들때 잘린 텍스트
  let changeHtml = "";

  if ( showText < contentLeng ) {
    changeHtml = `${lessText}<span>...</span><span class="more-content"><span>${moreText}</span><a href="#" class="more-btn active"><span>${moreBtnText}</span></a></span>`;
    elem.html(changeHtml);
  }
  console.log(changeHtml);
  // 버튼 영역 실행
  // class 삭제 할 때 el.removeClass("on")
  // .more-btn을 클릭할 때마다 .active가 toggle형태로 추가될 수 있도록 if구문 작성

  $(".more-btn").click(function (e) {
    // console.log($(this).hasClass("active"));

    // $(this).toggleClass("acvitve");

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).html(`<span>${lessBtnText}</span>`);
    } else {
      $(this).addClass("active");
      $(this).html(`<span>${moreBtnText}</span>`);
    }

    // prev(), parent(), toggle() 3개의 method를 사용하여 toggle 형태로 줄임말 포함된
    // span, 잘려진 텍스트를 담은 span을 선택하여 toggle 형태로 노출 시키시오.

    // prev() : 선택자의 바로 앞 요소 선택
    // next() : 선택자의 바로 뒤 요소 선택
    // parent() : 선택자의 부모 요소 선택
    // toggle() : display: none 반복하여 나타냄

    $(this).prev().toggle();
    $(this).parent().prev().toggle();
    e.preventDefault();
    return false;
  });

});
