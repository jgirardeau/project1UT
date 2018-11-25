$(document).ready(function(){
//     var config = {
//         apiKey: "AIzaSyCBcB7BThjBY9R4qE4E2u63FkkHYc3fDqw",
//         authDomain: "project1-recipes-dc3ca.firebaseapp.com",
//         databaseURL: "https://project1-recipes-dc3ca.firebaseio.com",
//         projectId: "project1-recipes-dc3ca",
//         storageBucket: "project1-recipes-dc3ca.appspot.com",
//         messagingSenderId: "915749649529"
//     };
//     firebase.initializeApp(config);
    
//     var database = firebase.database();
    
//     var favList = {
//         list1,
//         list2,
//         list3,
//         list4,
//         list5
//     }    
    
//     database.ref().set(favList);

    $(document).on("click", ".level-item", function(){
        event.preventDefault();
        var newDiv = $("<div>");
        var selectRecipe = $(this).closest(".newRecipe");        
        newDiv.append(selectRecipe);
        $("#fav-recipes").prepend(newDiv);
        // var recipeTitle = $('#recipe-title').text();


      
    });
   
    $(document).on("click", ".delete", function(){
        event.preventDefault();
        var recipeToDelete = $(this).closest(".newRecipe");
        recipeToDelete.remove();
        $(this).parent().remove();
    });
})