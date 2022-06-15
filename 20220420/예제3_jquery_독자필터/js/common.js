$(function() {
  // jquery 실행구문
  // first, first-child / last, last-child 비교 예제
  // $("p:first-child").css("color", "red"); // p를 자식요소로 갖고 있는 요소의 자식들중 첫번째 p를 선택
  // $("p:first").css("color", "blue");  // documnet 전체에서 선택한 요소의 첫번째를 선택
  // $("p:last-child").css("color", "green"); //p를 자식요소로 갖고 있는 요소의 자식들중 마지막 p를 선택
  // $("p:last").css("color", "blueviolet"); // documnet 전제체에서 선택한 요소의 마지막번째 줄

  // even, odd 예제 // index 값이 0 부터 시작한다. css의 even과 odd와는 다르다
  // $("li:even").css("color" ,"green");
  // $("li:odd").css("color", "blueviolet");

  // eq, gt(great than), lt(less than)
  // $("li:eq(2)").css("color", "red");  // 해당 인덱스와 같은 위치의 요소를 선택(index는 0부터);
  // $("li:gt(2)").css("color", "blue"); // greater than eq 기준으로 index가 가장 큰 요소를 선택
  // console.log($("li:gt(2)").length);
  // $("li:lt(2)").css("color", "green") // than eq 기준으로 index가 작은 요소들을 선택

  // heading 태그 선택
  // $(":header").css("color", "red");
  // $("h1,h6").css("color", "blue");

  // contains 문자열로 포함 유무 확인 후 요소 선택
  // $("li:contains('menu1')").css("color","red");
  // $("p:contains('사과')").css("color","red");
  // $("p:contains('배')").css("color","red");
  //
  // let elem = $("li:contains(menu1)");
  // console.log(elem);
  // if (elem.length > 0) {
  //   console.log('menu1 존재합니다.');
  // }

  // :has 태그 포함 유무로 요소 선택
  $("li:has(strong)").css("color", "red");

  // 1. p태그 갖고 있는 li 텍스트 색상을 blue 변경
  // 2. span 태그 갖고 있는 li 텍스트 색상을 orange 변경
  // 3. a 태그를 포함한 li와 li 자식요소 a 태그 텍스트 색상 green 변경

  // $("li:has(p)").css("color", "blue");
  // $("li:has(span)").css("color", "orange");
  // $("li:has(a), li:has(a) a").css("color", "green");

  // 자식 요소를 갖고 있는 요소를 선택
  $("li:parent").css("border", "1px solid red");

  // 유사클래스를 사용하여 자식 요소가 존재하지 않는 요소를 선택할 수 있다.
  // $("li:not(:parent)").css("border", "1px solid red");
});
