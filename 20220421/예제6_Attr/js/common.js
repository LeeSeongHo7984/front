$(function () {
  // script 영역 attr() 사용예
  // #wrap-id class attribute 가지고온다

  // javascript 구현
  // let attrNum = document.querySelector("#wrap-id").getAttribute("class");
  // console.log(attrNum);
  //
  // // jquery 구현
  // let num = $("#wrap-id").attr("class");
  // console.log(`get class attribute: ${num}`);
  //
  // // .wrap-inner 클래스로 선택하여 id 값을 가져오시오.
  // num = $(".wrap-inner").attr("id");
  // console.log(`get id attribute: ${num}`);

  // set attribute
  // javascript 구현
  // document.querySelector(".items").setAttribute("title", "this is items");

  // jquery 구현
  $(".title").attr("title", "this is items");
  // $("input").attr("checked", false); // input check 해제
  $("input").attr("checked", true); // input checked
  console.log($("input").attr("checked"));

  // add class
  // javascript 구문
  document.body.classList.add("bg-red");
  // document.querySelector("body").addClass("class", "bg-red");

  // jquery 구문
  $("body").addClass("bg-red");
  $("body").addClass("bg-blue");
  $("body").addClass("bg-yellow");
  $("body").addClass("bg-black");
});
