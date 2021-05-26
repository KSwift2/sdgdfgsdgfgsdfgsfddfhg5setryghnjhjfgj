
var firebaseConfig = {
      apiKey: "AIzaSyCy-iwFtgLMz_zwIvgHqLTB5zN6qV5dqH8",
      authDomain: "ggggggg-aetdiw.firebaseapp.com",
      databaseURL: "https://ggggggg-aetdiw.firebaseio.com",
      projectId: "ggggggg-aetdiw",
      storageBucket: "ggggggg-aetdiw.appspot.com",
      messagingSenderId: "623251748200",
      appId: "1:623251748200:web:4d7232bc0dd1e0437a12dd",
      measurementId: "G-E19FB67XB4"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
