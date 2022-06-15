$(function () {
  $.ajax({
    url: "data.xml",
    dataType: "xml",
    success: function(data) {
      $("item", data).each(function() {
        let titleText = $("title", this).text();
        let linkText = $("link", this).text();
        let dateText = $("date", this).text();
        let writerText = $("writer", this).text();
        let totalText = $("total", this).text();
        let desText = $("description", this).text();

        $("dl").append(`<dt><a href=${linkText}>${titleText}</a></dt><dd>${dateText}</dd><dd>${writerText}</dd><dd>${totalText}</dd><dd>${desText}</dd>`);
      })
    }
  })

  $("button").on("click", function() {
    $(this).toggleClass("on");
  })
});
