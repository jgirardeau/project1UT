$(document).ready(function(){
    $(document).on("click", ".level-item", function(){
        event.preventDefault();
        var newDiv = $("<div>");
        var selectRecipe = $(this).closest(".newRecipe");        
        newDiv.append(selectRecipe);
        $("#fav-recipes").prepend(newDiv);
    });
   
    $(document).on("click", ".delete", function(){
        event.preventDefault();
        var recipeToDelete = $(this).closest(".newRecipe");
        recipeToDelete.remove();
        $(this).parent().remove();
    });
})