// Initialize Firebase
$(document).ready(function(){
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

function addToDatabase(items, recipeTitle) {
    // console.log("add to database");
    var allItems = $("#" + items);
    // console.log(allItems)
    var itemsInRecipe = [];
    allItems.find('li').each(function(indx, item) {
        itemsInRecipe.push(item.innerHTML);
    });
    var recipe = {
        title: recipeTitle,
        items: itemsInRecipe,
        
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
    console.log("Is this working?")
    // if (childSnapshot.val().recipe.key === 0){

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
    // }else{

    // }
});

function addToFavorites (recipe){
    var newDiv = $("<div>");
    var selectRecipe = $(recipe).closest(".newRecipe");        
    newDiv.append(selectRecipe);
    $("#fav-recipes").prepend(newDiv);
    }
   
$(document).on("click", ".level-item", function(){
    event.preventDefault();
    addToFavorites(this);
    var recipeID = $(this).closest('article').attr('dataID');
    console.log(recipeID)
//     database.ref().push({
//         key: recipeID
//     })
});

//to do: figure out click event handler


// $(document).on("click", ".level-item", function(){
//     var selectRecipe = $(this).closest(".newRecipe");    
//     var dataID = selectRecipe.attr("dataID");
//     console.log(dataID);    
//     recipesInFavoritesList.push(dataID);
    // var recipe = {
    //     key: dataID
    // }
    // database.ref().push({
    //     recipe: recipe,
    //     dateAdded: firebase.database.ServerValue.TIMESTAMP
    // });
// });

$(document).on("click", ".delete", function(){
    event.preventDefault();
    var recipeToDelete = $(this).closest(".newRecipe");
    recipeToDelete.remove();
    $(this).parent().remove();
});
});