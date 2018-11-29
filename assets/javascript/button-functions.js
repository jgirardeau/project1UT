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
        //console.log("Delete this recipe ", recipeToDelete);
        recipeToDelete.remove();
        $(this).parent().remove();
        var key = recipeToDelete.attr('data');
        // check to remove from firebase
        var indx = recipesInFavoriteList.indexOf(key);
        //  console.log(indx)
        if (indx >= 0) {
            var databaseKey = recipesInFavoriteListKeys[indx];
            //  console.log(databaseKey)
            database.ref().child(databaseKey).remove();
        }
    });
})