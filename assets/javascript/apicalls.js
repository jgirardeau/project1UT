function getRecipe(item) {
    var queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=26b02ec4&_app_key=1b6cdc7b7ae0b6805b5689898a4a5311&q=" + item
        // "https://www.food2fork.com/api/search?key=332d3c22cb134df1dbac8637c8c2f7a4&q=" + item + "&page=2"
    $.ajax({
            url: queryURL,
            method: "GET",
        })
        .then(function(response) {
            renderRecipeToHtml(response);
            //  console.log(response);
        })
}

function getIngredients(ingredients) {
    var queryURL = "http://api.yummly.com/v1/api/recipe/" + ingredients + "?_app_id=26b02ec4&_app_key=1b6cdc7b7ae0b6805b5689898a4a5311"
    $.ajax({
            url: queryURL,
            method: "GET",
        })
        .then(function(response) {
            // console.log("calling api " + ingredients)
            renderIngredientsToHtml(response);
        })
}

// getRecipe("tofu");
// getIngredients("Sriracha-Tofu-2164179");