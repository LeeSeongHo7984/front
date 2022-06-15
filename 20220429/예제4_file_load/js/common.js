$(function() {
  // script영역 file load 예
  $("button").click(function() {
    $("p").load("./sample1.txt");  // load : 특정 외부파일을 가져올 수 있음.
  })
});
