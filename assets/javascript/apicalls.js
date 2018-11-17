function getRecipe(item) {
    var queryURL = "https://www.food2fork.com/api/search?key=332d3c22cb134df1dbac8637c8c2f7a4&q=" + item + "&page=2"
    $.ajax({
        url: queryURL,
        method: "GET",
    })
        .then(function (response) {
            renderRecipeToHtml(response);
        })
}

function getIngredients(ingredients) {
    var queryURL = "https://www.food2fork.com/api/get?key=332d3c22cb134df1dbac8637c8c2f7a4&rId=35382"
    $.ajax({
        url: queryURL,
        method: "GET",
    })
        .then(function (response) {
            renderIngredientsToHtml(response);
        })
}





