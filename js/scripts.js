function initials(name){
  var nameToArray = name.split(" ");
  return nameToArray[0].charAt(0).toLowerCase() + nameToArray[1].charAt(0).toLowerCase();
}
function nameCheck(name){
  var nameToArray = name.split(" ");
  return 2 !== nameToArray.length;
}

$(document).ready(function(){
  $("#form-1").submit(function(event){
    event.preventDefault();
    //Take in values
    var inputtedProjectName = $("input#project-name").val();
    var inputtedPartner1Name = $("input#partner1-name").val();
    var inputtedPartner2Name = $("input#partner2-name").val();
    var inputtedPartner1Email = $("input#partner1-email").val();
    var inputtedPartner2Email = $("input#partner2-email").val();
    var inputtedTemplate = $("input:radio[name=template]:checked").val();

    //Empty fields/broken input warnings
    if(inputtedProjectName === "" && inputtedTemplate !== "pairs") {
      alert("your project name is blank btw.")
    }
    if(inputtedPartner1Name === "" || inputtedPartner2Name === ""){
      alert("your partner initials won't be there unless you enter your names.")
    } else if (nameCheck(inputtedPartner1Name)){
      alert("partner 1 name will break my program >_> Make sure there's a first name and a last name with no space on the end")
    } else if (nameCheck(inputtedPartner2Name)){
      alert("partner 2 name will break my program <_< Make sure there's a first name and a last name with no space on the end")
    } else {
      var partner1Initials = initials(inputtedPartner1Name);
      var partner2Initials = initials(inputtedPartner2Name);
      if (partner1Initials === partner2Initials) {
        alert("ya'll have the same initials. you can't git pair with the same initials. i'll let you figure that out.")
      }
    }
    if (inputtedTemplate === "pairs" && (inputtedPartner1Email === "" || inputtedPartner2Email === "")) {
      alert("nice email :thinking:");
    }
    if (inputtedTemplate === "readme") {
      if (inputtedProjectName === "" || inputtedPartner1Name === "" || inputtedPartner2Name === "" || inputtedPartner1Email === "" || inputtedPartner2Email === "") {
        alert("for best results, fill all fields. thxxxx")
      }
    }
    //Populate fields
    $(".project-name").text(inputtedProjectName);
    $(".partner1-fullname").text(inputtedPartner1Name);
    $(".partner2-fullname").text(inputtedPartner2Name);
    $(".partner-email1").text(inputtedPartner1Email);
    $(".partner-email2").text(inputtedPartner2Email);
    $(".partner1").text(partner1Initials);
    $(".partner2").text(partner2Initials);

    //Hide/show
    if(inputtedTemplate === "pairs") {
      $(".pairs-template").fadeIn();
      $(".javascript").hide();
      $(".CSharp").hide();
      $(".readme-template").hide();
    } else if (inputtedTemplate === "javascript") {
      $(".pairs-template").hide();
      $(".javascript").fadeIn();
      $(".CSharp").hide();
      $(".readme-template").hide();
    } else if (inputtedTemplate === "csharp") {
      $(".pairs-template").hide();
      $(".javascript").hide();
      $(".CSharp").fadeIn();
      $(".readme-template").hide();
    } else if (inputtedTemplate === "readme") {
      $(".pairs-template").hide();
      $(".javascript").hide();
      $(".CSharp").hide();
      $(".readme-template").fadeIn();
    } else {
      alert("Idk how you managed to get this option...");
    }
    // //Create click functions
    // $(".pairs-click").click(function(){
    //   $(".pairs-template").fadeIn();
    //   $(".javascript").hide();
    //   $(".CSharp").hide();
    //   if (inputtedPartner1Email === "" || inputtedPartner2Email === "") {
    //     alert("You need an email entered for .pairs")
    //   }
    // });
    // $(".javascript-click").click(function(){
    //   $(".pairs-template").hide();
    //   $(".javascript").fadeIn();
    //   $(".CSharp").hide();
    //   if (inputtedProjectName === "") {
    //     alert("Make sure you enter a project name");
    //   }
    // });
    // $(".csharp-click").click(function(){
    //   $(".pairs-template").hide();
    //   $(".javascript").hide();
    //   $(".CSharp").fadeIn();
    //   if (inputtedProjectName === "") {
    //     alert("Make sure you enter a project name");
    //   }
    // });

  });
});
