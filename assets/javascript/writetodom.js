function renderRecipeToHtml(response) {
    var recipes = response.matches;
    if (recipes.length < 1) {
        $("#recipeNotFound").removeClass("errorHide").addClass("errorShow");
    } else {
        $("#recipeNotFound").removeClass("errorShow").addClass("errorHide");
    }
    //getIngredients(recipes[0].id);
    recipes.forEach(function(val) {
        getIngredients(val.id)
    });
}
// filter out undefines; add "," if more than one descriptor already
function addToStringWithComma(string, stringHead, stringTail) {
    // console.log("start of call " + stringTail)
    if (stringTail) {
        if (string) string += ", ";
        string += stringHead + stringTail;
    }
    //console.log("return ", string)
    return string;
}

function addItemsToList(htmlRef, items) {
    console.log("Add items")
    htmlRef.empty();
    items.forEach(function(val) {
        var li = $("<li>");
        li.text(val);
        htmlRef.append(li);
    });
}

function renderIngredientsToHtml(val) {
    // console.log(val);
    // configure template html
    console.log("Render ingredients")
    $('#recipe-title').text(val.name);
    info = addToStringWithComma("", "Servings: ", val.numberOfServings);
    info = addToStringWithComma(info, "Prep time: ", val.prepTime);
    info = addToStringWithComma(info, "Cooking time: ", val.cookTime);
    $("#recipeInformation").text(info);
    $("#recipeURL").attr('href', val.attribution.url)
    $("#image-1").attr('src', (val.images[0].hostedLargeUrl));
    addItemsToList($("#recipeGroceryList"), val.ingredientLines);
    $("#addToGrocery").attr('data', 'food-' + val.id);
    var recipeLocation = $("#recipeGroceryList");
    $("#recipeGroceryList").attr('id', 'food-' + val.id);

    // clone
    var box2 = $('#hidden-box').clone();
    box2.addClass("newRecipe");
    box2.attr('id', 'box-' + val.id);
    box2.addClass("newRecipe");
    box2.removeClass("hidden");
    box2.appendTo('#box-container');
    recipeLocation.attr('id', "recipeGroceryList");
}