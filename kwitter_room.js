
const firebaseConfig = {
      apiKey: "AIzaSyAWazS5KP-Y-qpRgliCpofPhmlaFSoNEoA",
      authDomain: "burstlaugh-c02c8.firebaseapp.com",
      databaseURL: "https://burstlaugh-c02c8-default-rtdb.firebaseio.com",
      projectId: "burstlaugh-c02c8",
      storageBucket: "burstlaugh-c02c8.appspot.com",
      messagingSenderId: "724941565198",
      appId: "1:724941565198:web:91a272e0085340b930fb5f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
