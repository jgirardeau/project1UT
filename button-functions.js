$(document).ready(function(){
    function removeRecipe(){
        var recipeToRemove = $("#content-5");//need recipe id number
        recipeToRemove.remove();
    }
    function addToFavorites(){
        $(".recipeSubHead").remove();
        var newDiv = $("<div>");
        var recipeID = $("#content-5");//will need id num for each recipe
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