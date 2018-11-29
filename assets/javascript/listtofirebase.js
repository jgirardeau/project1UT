// Initialize Firebase
var config = {
    apiKey: "AIzaSyAuO9BnhrPGkQ_pXC1ctTguv5DnlJyRYJ4",
    authDomain: "what-s-to-eat.firebaseapp.com",
    databaseURL: "https://what-s-to-eat.firebaseio.com",
    projectId: "what-s-to-eat",
    storageBucket: "what-s-to-eat.appspot.com",
    messagingSenderId: "951403085103"
  };
  
firebase.initializeApp(config);

// assign to global
database = firebase.database();

function addItemToList(item) {
    // console.log(item);
    var li = $("<li>");
    li.text(item.recipeItem);
    // console.log(item);
    $("#groceryList").append(li);
}

function addGroceryToDatabase(items, recipeTitle) {
    // console.log("add to database");
    var allItems = $("#" + items);
    // console.log(allItems)
    var itemsInRecipe = [];
    allItems.find('li').each(function(indx, item) {
        itemsInRecipe.push(item.innerHTML);
    });
    addToDatabase(0, recipeTitle, itemsInRecipe);
}

function addToDatabase(key, recipeTitle, itemsInRecipe) {
    var recipe = {
        key: key,
        title: recipeTitle,
        items: itemsInRecipe
    }
    database.ref().push({
        recipe: recipe,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
}

function deleteTableRow(key) {
    database.ref().child(key).remove();
    $("#" + key).remove();
}

//When database changes this function will be called.
database.ref().orderByChild("dateadded").on("child_added", function(childSnapshot) {
    console.log(childSnapshot.key);
    // check grocery vs. favorite
    var key = childSnapshot.key;
    
    var recipeKey = childSnapshot.val().recipe.key;
    console.log(recipeKey);
    if (recipeKey === 0) {
        //grocery
        var $div = $("<div>");
        $div.attr('id', childSnapshot.key);
        var $title = $("<h1>");
        $title.text(childSnapshot.val().recipe.title);
        $title.attr('class', 'strongText');
        $title.prepend('<button type="button" class="btn btn-primary btn-sm" class = "centerButton" onclick=deleteTableRow("' + key + '")> <i class="fa fa-trash"> </button>');
        var $ul = $("<ul>");
        $.each(childSnapshot.val().recipe.items, function(idx, value) {
            var li = $("<li>");
            li.text(value);
            $ul.append(li);
        });
        $div.append($title);
        $div.append($ul);
        $("#groceryList").prepend($div);
        recipesInGroceryList.push(childSnapshot.val().recipe.title);
    } else {
        //favorite
        recipesInFavoriteList.push(recipeKey);
        getIngredients(recipeKey);
    }   

    $(document).on("click", ".delete", function() {
        event.preventDefault();
                        
        var recipeToDelete = $(this).closest(".newRecipe");
       
        recipeToDelete.attr("id", key);
        // console.log(recipeToDelete);
        database.ref().child(key).remove();
        recipeToDelete.remove();
        
        // $(this).parent().remove();
    });

    
});
