// Initialize Firebase
var config = {
    apiKey: "AIzaSyAWFTeuvGaobUOR8mtYuNO_wfkrCFAmEJ4",
    authDomain: "click-project-7e09f.firebaseapp.com",
    databaseURL: "https://click-project-7e09f.firebaseio.com",
    projectId: "click-project-7e09f",
    storageBucket: "click-project-7e09f.appspot.com",
    messagingSenderId: "1002181717070"
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
    //console.log(childSnapshot.val().recipe.key);
    // check grocery vs. favorite
    var recipeKey = childSnapshot.val().recipe.key;
    if (recipeKey === 0) {
        //grocery
        var $div = $("<div>");
        $div.attr('id', childSnapshot.key);
        var $title = $("<h1>");
        $title.text(childSnapshot.val().recipe.title);
        $title.attr('class', 'strongText');
        var key = childSnapshot.key;
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
});