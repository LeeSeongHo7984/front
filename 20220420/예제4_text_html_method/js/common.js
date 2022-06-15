$(function () {
  // script 영역 text() 사용 예
  // let textNum = "";
  // textNum = $("p#first").text("hi!! jquery!!");
  // console.log(textNum);

  // 특정 요소의 텍스트를 다른 요소에 삽입하는 예
  // 방법 1
  // $("p#second").text();
  // console.log($("p#second").text());
  // $("p#first").text($("p#second").text());

  // 방법 2
  // a type
  // let elem = $("p#first");
  // let elemInputText = $("p#second").text();
  // elem.text(elemInputText);

  // b type
  // let elem = $("p#first");
  // let elemInput = $("p#second");
  // elem.text(elemInput.text());

  let numHtml = "";
  // numHtml = $("p#second").html();
  // numHtml = document.querySelector("p#second").innerHTML;
  // console.log(numHtml);

  // #third의 자식 요소 h2의 텍스트를 가져와서 p#first에 변경하세요
  // numHtml = $("#third h2").html();
  // $("p#first").html(numHtml);
  // console.log(numHtml);

  // javascript로 구현
  // numHtml = document.querySelector("#third h2").innerHTML;
  // console.log(numHtml);
  // document.querySelector("p#first").innerHTML = numHtml;
});
