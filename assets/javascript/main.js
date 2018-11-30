// all button click functions are here
$(document).ready(function() {

    // validate input and toggle error message visibility
    function validateInputTextNotEmpty(inputText, htmlRef) {
        var validText = false;
        if (inputText.length > 0) {
            htmlRef.removeClass("errorShow").addClass("errorHide");
            validText = true;
        } else {
            htmlRef.removeClass("errorHide").addClass("errorShow");
        }
        return validText;
    }

    // start recipe search
    $("#submitButton").click(function() {
        event.preventDefault();
        $("#referenceRecipeResults").get(0).scrollIntoView();
        var recipeName = $("#recipeSearch").val();
        if (validateInputTextNotEmpty(recipeName, $("#recipeMissing"))) {
            getRecipe(recipeName);
        }
    });

    // remove all previous recipe search results
    $("#clearButton").click(function() {
        event.preventDefault();
        $("#box-container").empty();
    });

    // add items to the grocery list, including storing to firebase
    $(document).on('click', '#addToGrocery', function() {
        event.preventDefault();
        var tableName = $(this).attr('data');
        var tableTitle = $(this).attr('title');
        if (recipesInGroceryList.indexOf(tableTitle) < 0) {
            // only add new recipes
            addGroceryToDatabase(tableName, tableTitle);
            window.scrollTo(0, 0);
        }
    });

    // hotkeys are quick ways to call up pre-set inputs to search (chicken, pasta...)
    $(".hotKey").click(function() {
        var searchItem = $(this).attr('data');
        // console.log("search for ", searchItem)
        $("#recipeSearch").val(searchItem);
        $("#submitButton").triggerHandler('click');
    });


    // start restaurant search
    $("#restSubmitButton").click(function() {
        event.preventDefault();
        var recipeName = $("#restaurantSearch").val();
        // console.log(recipeName);
        if (validateInputTextNotEmpty(recipeName, $("#recipeMissing"))) {
            //console.log("call recipe api" + recipeName)
            foodsearch = recipeName + " restaurant";
            getLocation();
        }
    });

    // add items to the favorite list, including storing to firebase
    $(document).on("click", ".favoriteButton", function() {
        event.preventDefault();
        var newDiv = $("<div>");
        var selectRecipe = $(this).closest(".newRecipe");
        var recipeKey = selectRecipe.attr('data');
        recipesInFavoriteList.push(recipeKey);
        addToDatabase(recipeKey, 0, 0);
    });

    // delete items from favorites and from firebase
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

    function hamburgerMenu () {
        var burger = document.querySelector(".burger");
        var nav = document.querySelector("#" + burger.dataset.target);

        burger.addEventListener("click", function (){
            burger.classList.toggle("is-active");
            nav.classList.toggle("is-active");
        });
    };
    hamburgerMenu();

});