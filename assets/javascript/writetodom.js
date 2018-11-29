// functions that modify DOM are here

// calls api for each recipe returned from global search; this is needed to get more detailed info on each recipe
function renderRecipeToHtml(response) {
    var recipeURL = response.sourceRecipeUrl;
    var recipes = response.matches;
    checkIfNothingFound(recipes.length);
    //getIngredients(recipes[0].id);
    recipes.forEach(function(val) {
        if (recipesInFavoriteList.indexOf(val.id) < 0) {
            getIngredients(val.id)
        }
    });
}

// make error visible if nothing is in list; otherwise hide error
function checkIfNothingFound(val) {
    if (val < 1) {
        $("#recipeNotFound").removeClass("errorHide").addClass("errorShow");
    } else {
        // tell user nothing was found
        $("#recipeNotFound").removeClass("errorShow").addClass("errorHide");
    }
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

// generic function to add items to an html list
function addItemsToList(htmlRef, items) {
    // console.log("Add items")
    htmlRef.empty();
    items.forEach(function(val) {
        var li = $("<li>");
        li.text(val);
        htmlRef.append(li);
    });
}

// Clone a div and add details
// a hidden div is floating around; when a new recipe comes in, the hidden div is updated
// then the div is cloned and assigned to the main screen
// then the div is made visible.
// note:
//  this function can render to the "favorites" area if the recipe is returned from firebase as a favorite
//  or it can render to the recipe search area from an yummly API search.
function renderIngredientsToHtml(val) {
    $('#recipe-title').text(val.name);
    info = addToStringWithComma("", "Servings: ", val.numberOfServings);
    info = addToStringWithComma(info, "Prep time: ", val.prepTime);
    info = addToStringWithComma(info, "Cooking time: ", val.cookTime);
    $("#recipeInformation").text(info);
    $("#recipeURL").attr('href', val.attribution.url)
    $("#image-1").attr('src', (val.images[0].hostedLargeUrl));
    addItemsToList($("#recipeGroceryList"), val.ingredientLines);
    $("#addToGrocery").attr('data', 'food-' + val.id);
    $("#addToGrocery").attr('title', val.name);
    var recipeLocation = $("#recipeGroceryList");
    $("#recipeGroceryList").attr('id', 'food-' + val.id);
    var recipeTitle = $("#recipe-title");
    $("#recipe-title").attr('id', 'recipeTitle-' + val.id);

    // clone
    var box2 = $('#hidden-box').clone();
    box2.addClass("newRecipe");
    box2.attr('data', val.id);
    box2.attr('id', 'box-' + val.id);
    box2.removeClass("hidden");
    //console.log("render ", val.id);
    if (recipesInFavoriteList.indexOf(val.id) < 0) {
        box2.prependTo('#box-container');
        // console.log("regular");
    } else {
        box2.prependTo('#fav-recipes');
        // console.log("favorites")
    }
    recipeLocation.attr('id', "recipeGroceryList");
    recipeTitle.attr('id', "recipe-title");
}