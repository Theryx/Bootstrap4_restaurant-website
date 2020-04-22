$(document).ready(function() {
  $("div.media > img").hover(function() {
    $(this).css("border", "solid 1px blue");
  });
  $("#reservebtn").click(function() {
    $("#ReserveForm").modal("toggle");
  });
  $("#loginModalbtn").click(function() {
    $("#loginModal").modal("toggle");
  });
});
