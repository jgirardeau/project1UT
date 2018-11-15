var config = {
    apiKey: "AIzaSyCBcB7BThjBY9R4qE4E2u63FkkHYc3fDqw",
    authDomain: "project1-recipes-dc3ca.firebaseapp.com",
    databaseURL: "https://project1-recipes-dc3ca.firebaseio.com",
    projectId: "project1-recipes-dc3ca",
    storageBucket: "project1-recipes-dc3ca.appspot.com",
    messagingSenderId: "915749649529"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var listItem1 = "";
  var listItem2 = "";
  var listItem3 = "";

  database.ref().set({
      listItem1,
      listItem2,
      listItem3
  });