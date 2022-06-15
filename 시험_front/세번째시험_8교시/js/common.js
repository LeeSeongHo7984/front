$(function() {
  $.ajax({
    url: "data.xml",
    dataType: "xml",
    success: function(data) {
      $("item", data).each(function() {
        let linkText = $("link", this).text();
        let titleText = $("title", this).text();
        let dateText = $("date", this).text();
        let desText = $("description", this).text();

        $("dl").append(`<dt><a href=${linkText}>${titleText}</a></dt><dd>${dateText}</dd><dd>${desText}</dd>`);
      })
    }
  })

  $("button").on("click", function() {
    $(this).toggleClass("on");
  })
})
