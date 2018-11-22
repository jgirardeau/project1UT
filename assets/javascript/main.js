$(document).ready(function(){
var config = {
    apiKey: "AIzaSyCBcB7BThjBY9R4qE4E2u63FkkHYc3fDqw",
    authDomain: "project1-recipes-dc3ca.firebaseapp.com",
    databaseURL: "https://project1-recipes-dc3ca.firebaseio.com",
    projectId: "project1-recipes-dc3ca",
    storageBucket: "project1-recipes-dc3ca.appspot.com",
    messagingSenderId: "915749649529"
};
firebase.initializeApp(config);

var database = firebase.database();

var listItem1 = "";
var listItem2 = "";
var listItem3 = "";

database.ref().set({
    listItem1,
    listItem2,
    listItem3
});

function validateInputTextNotEmpty(inputText, htmlRef) {
    var validText = false;
    // console.log(inputText, " ", inputText.length)
    if (inputText.length > 0) {
        htmlRef.removeClass("errorShow").addClass("errorHide");
        validText = true;
    } else {
        htmlRef.removeClass("errorHide").addClass("errorShow");
    }
    return validText;
}

$("#submitButton").click(function() {
    event.preventDefault();
    var recipeName = $("#recipeSearch").val();
    // console.log(recipeName);
    if (validateInputTextNotEmpty(recipeName, $("#recipeMissing"))) {
        // call api
    }
});

    
$(document).on("click", ".level-item", function(){
    // console.log(favrecipe);
    var favDiv = $("<div>");
    var favrecipe = $("#buttons-test");
    favDiv.append(favrecipe);
    $("#fav-recipes").append(favDiv);
    
   //will need to change "text" to prepend
});
function removeRecipe(){
    var recipeToRemove = $("#buttons-test");
    recipeToRemove.remove();
    // $(this).closest(".article").remove();
}

$(document).on("click", ".delete", function(){
    event.preventDefault();
    console.log("clicked");
    removeRecipe();
    // $(this).closest(".article").remove();
    $(this).parent().remove();
});
}) 