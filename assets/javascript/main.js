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