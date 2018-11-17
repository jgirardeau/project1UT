function renderRecipeToHtml(response) {
    //     var box2 = $('#hidden-box').clone();
    //     box2.attr('id', 'box-' + i);
    //     box2.appendTo('#box-container');
    var recipes = response.matches;
    //console.log(response);
    // console.log(recipes.length)
    if (recipes.length < 1) {
        $("#recipeNotFound").removeClass("errorHide").addClass("errorShow");
    } else {
        $("#recipeNotFound").removeClass("errorShow").addClass("errorHide");
    }
    recipes.forEach(function(val) {
        getIngredients(val.id)
    });
}

function renderIngredientsToHtml(val) {
    console.log(val);
    $('#recipe-title').text(val.name);
    var info = "";
    if (val.numberOfServings) info += "servings: " + val.numberOfServings;
    if (val.prepTime) {
        if (info) info += ", ";
        info += "prep time: " + val.prepTime;
    }
    if (val.cookTime) {
        if (info) info += ", ";
        info += "cook time: " + val.cookTime;
    }
    $("#recipeInformation").text(info);
    $("#image-1").attr('src', (val.images[0].hostedLargeUrl));
    var box2 = $('#hidden-box').clone();
    // box2.attr('id', 'box-' + val.id);
    box2.removeClass("hidden").addClass("notHidden");
    box2.appendTo('#box-container');
}