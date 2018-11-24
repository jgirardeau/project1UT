$(document).ready(function(){
<<<<<<< HEAD
    $(document).on("click", ".level-item", function(){
        event.preventDefault();
        var newDiv = $("<div>");
        var selectRecipe = $(this).closest(".newRecipe");        
        newDiv.append(selectRecipe);
        $("#fav-recipes").append(newDiv);
       
=======
    // function removeRecipe(){
    //     var recipeToRemove = $("#recipe-1");//need recipe id number
    //     recipeToRemove.remove();
    // }
    // function addToFavorites(){
    //     var newDiv = $("<div>");
    //     var recipeID = $(this).;//will need id num for each recipe
    //     newDiv.append(recipeID);
    //     $("#fav-recipes").append(newDiv);
        
    // }

    $(document).on("click", ".level-item", function(){
        event.preventDefault();
        var newDiv = $("<div>");
        var recipeToAdd = $(this).closest(".newRecipe");
        newDiv.append(recipeToAdd);
        $("#fav-recipes").append(newDiv);
        
        
>>>>>>> e623b10b2b51d573d1e0459a201d1bde402ade58
    });
   
    $(document).on("click", ".delete", function(){
        event.preventDefault();
<<<<<<< HEAD
       $(this).closest(".newRecipe").remove();
=======
        var recipeToDelete = $(this).closest(".newRecipe");
        recipeToDelete.remove();
>>>>>>> e623b10b2b51d573d1e0459a201d1bde402ade58
        $(this).parent().remove();
    });
})