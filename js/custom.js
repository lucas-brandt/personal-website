$(document).ready(function() {
  //TODO: potentially implement this if it benefits users and CTA
  // if ("geolocation" in navigator) {
  //   navigator.geolocation.getCurrentPosition(function(position) { 
  //     var lat = position.coords.latitude;
  //     var long = position.coords.longitude;
  //   });
  // };

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCgaUZOojOQ_8ei7Pb3GhS6QnDECpFz0ik",
    authDomain: "oddsconnect-77f4f.firebaseapp.com",
    databaseURL: "https://oddsconnect-77f4f.firebaseio.com",
    projectId: "oddsconnect-77f4f",
    storageBucket: "oddsconnect-77f4f.appspot.com",
    messagingSenderId: "569431342377"
  };
  firebase.initializeApp(config);
});
