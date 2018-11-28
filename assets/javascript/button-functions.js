$(document).ready(function() {
    $(document).on("click", ".favoriteButton", function() {
        event.preventDefault();
        var newDiv = $("<div>");
        var selectRecipe = $(this).closest(".newRecipe");
        var recipeKey = selectRecipe.attr('data');
        recipesInFavoriteList.push(recipeKey);
        addToDatabase(recipeKey, 0, 0);
    });

    $(document).on("click", ".delete", function() {
        event.preventDefault();
        var recipeToDelete = $(this).closest(".newRecipe");
        recipeToDelete.remove();
        $(this).parent().remove();
    });
})