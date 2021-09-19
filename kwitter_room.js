// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAiAgexrHzZ1xV0vtC9jqd_e_xrobBWW3g",
      authDomain: "kwitter-cff37.firebaseapp.com",
      databaseURL: "https://kwitter-cff37-default-rtdb.firebaseio.com",
      projectId: "kwitter-cff37",
      storageBucket: "kwitter-cff37.appspot.com",
      messagingSenderId: "168427281880",
      appId: "1:168427281880:web:71e9ef1dbf32d8cac926ad"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;


function add_room(){
 room_name=document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
       purpose:"adding room name"
 });

 localStorage.setItem("room_name",room_name);
 window.location="kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
window.location="index.html";
}