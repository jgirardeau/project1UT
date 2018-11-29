function getRecipe(item) {
    var queryURL = "https://api.yummly.com/v1/api/recipes?_app_id=26b02ec4&_app_key=1b6cdc7b7ae0b6805b5689898a4a5311&q=" + item
    $.ajax({
            url: queryURL,
            method: "GET",
        })
        .then(function(response) {
            renderRecipeToHtml(response);
        })
}

function getIngredients(ingredients) {
    var queryURL = "https://api.yummly.com/v1/api/recipe/" + ingredients + "?_app_id=26b02ec4&_app_key=1b6cdc7b7ae0b6805b5689898a4a5311"
    $.ajax({
            url: queryURL,
            method: "GET",
        })
        .then(function(response) {
            renderIngredientsToHtml(response);
        })
}