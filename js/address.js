
$(document).ready(function(){
  $("#formOne").submit(function(event) {

    var fullName= $("input#nameInput").val();
    var streetName= $("input#streetInput").val();
    var cityName= $("input#cityInput").val();
    var zipName= $("input#zipInput").val();
    var emailName= $("input#emailInput").val();

    $(".nameInput").text(fullName);
    $(".streetInput").text(streetName);
    $(".cityInput").text(cityName);
    $(".zipInput").text(zipName);
    $(".emailInput").text(emailName);

    event.preventDefault();
  });
});
