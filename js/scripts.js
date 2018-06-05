$(document).ready(function(){
  $("#form-1").submit(function(event){
    event.preventDefault();
    var inputtedProjectName = $("input#project-name").val();
    var inputtedPartner1Initials = $("input#partner1-initials").val();
    var inputtedPartner2Initials = $("input#partner2-initials").val();

    $(".project-name").text(inputtedProjectName);
    $(".partner1").text(inputtedPartner1Initials);
    $(".partner2").text(inputtedPartner2Initials);
  });
});
