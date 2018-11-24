$(document).ready(function(){
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