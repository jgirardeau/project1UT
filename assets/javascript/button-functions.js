$(document).ready(function(){
    function removeRecipe(){
        var recipeToRemove = $("#recipe-1");//need recipe id number
        recipeToRemove.remove();
    }
    function addToFavorites(){
        var newDiv = $("<div>");
        var recipeID = $("#recipe-1");//will need id num for each recipe
        newDiv.append(recipeID);
        $("#fav-recipes").append(newDiv);
        
    }

    $(document).on("click", ".level-item", function(){
        event.preventDefault();
        addToFavorites();
    });
   
    $(document).on("click", ".delete", function(){
        event.preventDefault();
        removeRecipe();
        $(this).parent().remove();
    });
})