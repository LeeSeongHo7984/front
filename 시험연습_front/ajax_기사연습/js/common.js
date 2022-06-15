$(function() {
  $.ajax({
    url: "data.xml",
    dataType: "xml",
    success: function(data) {
      $("item", data).each(function() {
        let linkText = $("link", this).text();
        let titleText = $("title", this).text();
        let dataText = $("data", this).text();
        let writerText = $("writer", this).text();
        let desText = $("description", this).text();

        $("dl").append(`<dt><a href=${linkText}>${titleText}</a></dt><dd>${dataText}</dd><dd>${writerText}</dd><dd>${desText}</dd>`);
      })
    }
  })

  $("button").on("click", function() {
    $(this).toggleClass("on");
  })
})
