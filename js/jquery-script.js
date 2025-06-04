
$(document).ready(function () {
  $("#jq-box").hover(
    function () {
      $(this).css("background-color", "#f5b041").text("Hovered!");
    },
    function () {
      $(this).css("background-color", "#fff3e0").text("Hover or Toggle Me");
    }
  );

  $("#toggleBtn").click(function () {
    $("#jq-box").slideToggle();
  });
});