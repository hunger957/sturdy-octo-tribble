//ADD YOUR FIREBASE LINKS
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

    function addUser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});
}