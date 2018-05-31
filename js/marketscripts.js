

$(document).ready(function(){
  $("#formOne").submit(function(event) {
    var fullname= $("input#nameInput").val();
    $(".nameInput").text(fullname);
    event.preventDefault();
    });

    // $(".btn btn-primary").click(function(){
    // $("#exampleModal").modal("hide");



  // });
});
