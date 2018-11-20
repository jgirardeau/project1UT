
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

function addItemsToList(items) {
    console.log(items);
    for(var i=0;i<items.recipefood.length;i++){
        console.log(items.recipefood[i]);
        var li = $("<li>");
        li.text(items.recipefood[i]);
        $("#grocery-list").append(li);
    }
}



// var recipefood = ["eggs", " milk", "cheese"]
//     database.ref().push({
//        recipefood:recipefood
//     });
//When database changes this function will be called.
 database.ref().orderByChild("dateadded").on("child_added", function (childSnapshot) {       
        addItemsToList(childSnapshot.val());
    });