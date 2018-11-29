$(document).ready(function () {

    function validateInputTextNotEmpty(inputText, htmlRef) {
        var validText = false;
        // console.log(inputText, " ", inputText.length)
        if (inputText.length > 0) {
            htmlRef.removeClass("errorShow").addClass("errorHide");
            validText = true;
        } else {
            htmlRef.removeClass("errorHide").addClass("errorShow");
        }
        return validText;
    }

    $("#submitButton").click(function () {
        event.preventDefault();
        var recipeName = $("#recipeSearch").val();

        // console.log(recipeName);
        if (validateInputTextNotEmpty(recipeName, $("#recipeMissing"))) {
            //console.log("call recipe api" + recipeName)
            getRecipe(recipeName);
        }
    });
    $("#restaurantButton").click(function () {
        event.preventDefault();
        var recipeName = $("#recipeSearch").val();

        // console.log(recipeName);
        if (validateInputTextNotEmpty(recipeName, $("#recipeMissing"))) {
            foodsearch = recipeName + " restaurant";
            getLocation();
        }
    });
   
        $("#clearButton").click(function () {
            event.preventDefault();
            $("#box-container").empty();
        });

        // Adding a click button for a dynamic element
        $(document).on('click', '#addToGrocery', function () {
            event.preventDefault();
            var tableName = $(this).attr('data');
            var tableTitle = $(this).attr('title');
            //console.log("add to table: ", tableTitle)
            if (recipesInGroceryList.indexOf(tableTitle) < 0) {
                // only add new recipes
                addGroceryToDatabase(tableName, tableTitle);
                window.scrollTo(0, 0);
            }
        });


        $(".hotKey").click(function () {
            var searchItem = $(this).attr('data');
            // console.log("search for ", searchItem)
            $("#recipeSearch").val(searchItem);
            $("#submitButton").triggerHandler('click');
        });

        $("#restSubmitButton").click(function () {
            event.preventDefault();
            var recipeName = $("#restaurantSearch").val();
    
            // console.log(recipeName);
            // if (validateInputTextNotEmpty(recipeName, $("#recipeMissing"))) {
                //console.log("call recipe api" + recipeName)
                foodsearch = recipeName + " restaurant";
                getLocation();
            // }
        });
    });