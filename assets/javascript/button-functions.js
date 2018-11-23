$(document).ready(function(){
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
        
        
    });
   
    $(document).on("click", ".delete", function(){
        event.preventDefault();
        var recipeToDelete = $(this).closest(".newRecipe");
        recipeToDelete.remove();
        $(this).parent().remove();
    });
})