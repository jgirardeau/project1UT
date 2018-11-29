//firebase database holder; global so it can be shared across different modules accessing firebase
var database;

//recipe list; global so multiple callbacks can access
var recipesInGroceryList = [];
var recipesInFavoriteList = [];
var recipesInFavoriteListKeys = [];