
$(document).ready(function(){
  $("#formOne").submit(function(event) {

    var fullName= $("input#nameInput").val();
    var streetName= $("input#streetInput").val();
    var cityName= $("input#cityInput").val();
    var zipName= $("input#zipInput").val();
    var emailName= $("input#emailInput").val();

    $("ul#user").prepend("<li>Hello!</li>");
    $(".nameInput").text(fullName);
    $(".streetInput").text(streetName);
    $(".cityInput").text(cityName);
    $(".zipInput").text(zipName);
    $(".emailInput").text(emailName);

    event.preventDefault();


  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
      });
    });
  });
});
