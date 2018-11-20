// var config = {
//     apiKey: "AIzaSyCBcB7BThjBY9R4qE4E2u63FkkHYc3fDqw",
//     authDomain: "project1-recipes-dc3ca.firebaseapp.com",
//     databaseURL: "https://project1-recipes-dc3ca.firebaseio.com",
//     projectId: "project1-recipes-dc3ca",
//     storageBucket: "project1-recipes-dc3ca.appspot.com",
//     messagingSenderId: "915749649529"
// };
// firebase.initializeApp(config);

// var database = firebase.database();

// var listItem1 = "";
// var listItem2 = "";
// var listItem3 = "";

// database.ref().set({
//     listItem1,
//     listItem2,
//     listItem3
// });

//Add Function to render Full media box

//create test object that comes back from API
//2 hardcoded arrays of what will be populated

//FIRST STEP - dyamically copy article (copy box 1)
//create document.onload (grabs element by id, grab parent of element, clone child and append)

//test the title to see if we can change that one variable then move onto API


//THEN, before appending, grabbing elements before append plug in info from API
//rather then onload, 

//eventually convert onload function to populate recipe.. then variables

//child - #box-1
//parent - #box-container

//change display hidden to display none

$(document).ready(function() {
    // console.log('ready');
    // //box1.clone().appendTo( '#box-container' );

    // for (var i = 1; i < 3; i++) {

    //     // $('#recipe-title').text('API RECIPE TITLE');
    //     var box2 = $('#hidden-box').clone();
    //     box2.attr('id', 'box-' + i);
    //     box2.appendTo('#box-container');
    // }

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
        //console.log("call recipe api" + recipeName)
        getRecipe(recipeName);
    }

    

$("#clearButton").click(function() {
    event.preventDefault();
    $( "#box-container" ).empty();
})
});