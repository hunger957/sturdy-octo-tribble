//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDZqRLnKQvkjeI_3LQNa3Z--BrnqMkP_l0",
      authDomain: "kwitter-badc2.firebaseapp.com",
      databaseURL: "https://kwitter-badc2-default-rtdb.firebaseio.com",
      projectId: "kwitter-badc2",
      storageBucket: "kwitter-badc2.appspot.com",
      messagingSenderId: "100131916630",
      appId: "1:100131916630:web:69c5dabeac2bea1e06e4f7"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
