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

// Create a variable to reference the database
var database = firebase.database();
var recipe;
// function addtableEntry(table) {
//     var tr = $("<tr>");
//     addTableItem(tr, table.trainName);
//     addTableItem(tr, table.destination);
//     addTableItem(tr, table.frequency);
//     var arrival = calculateNextArrival(table.frequency, table.firstTrainTime);
//     addTableItem(tr, arrival[1]);
//     addTableItem(tr, arrival[0]);
//     $("#tableBody").append(tr);


function addItemToList(item) {
    // console.log(item);
    var li = $("<li>");
    li.text(item.recipeItem);
    // console.log(item);
    $("#groceryList").append(li);
}

function addToDatabase(items) {
    // console.log("add to database");
    // console.log(items)
    var allItems = $("#" + items);
    // allItems.find('li').each(function (indx, item) {
    //     // console.log(item.innerHTML);
    //     //recipeItems[indx]=item.innerHTML;
    //     database.ref().push({
    //         recipeItem: item.innerHTML,
    //         dateAdded: firebase.database.ServerValue.TIMESTAMP
    //     });
    // });
    console.log($("#recipe-title"))
    var recipeTitle = $('#recipe-title').text();
    var itemsInRecipe = [];
    allItems.find('li').each(function(indx, item) {
        itemsInRecipe.push(item.innerHTML);
    });


    var recipe = {
            title: recipeTitle,
            items: itemsInRecipe
        }
        // console.log(item.innerHTML);
        //recipeItems[indx]=item.innerHTML;
    database.ref().push({
        recipe: recipe,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

}

function deleteTableRow(key) {
    // console.log(this);
    database.ref().child(key).remove();
    $("#" + key).remove();
}


//When database changes this function will be called.
database.ref().orderByChild("dateadded").on("child_added", function(childSnapshot) {
    // console.log("addlist")
    //console.log(childSnapshot);
    // console.log(childSnapshot.val())
    // addItemToList(childSnapshot.val());
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
    $("#groceryList").append($div);

});