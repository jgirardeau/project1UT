// all global vars should be here 

//firebase database holder; global so it can be shared across different modules accessing firebase
var database;

//recipe list; global so multiple callbacks can access
var recipesInGroceryList = [];
//favorites list; global so multiple callbacks can access
var recipesInFavoriteList = []; // these two arrays can be combined into one array at a later date
var recipesInFavoriteListKeys = []; // these two arrays can be combined into one array at a later date

// google API variables -- can probably be done better, but running out of time figuring out the google api
var map;
var service;
var infowindow;
var markers = [];
var foodsearch;