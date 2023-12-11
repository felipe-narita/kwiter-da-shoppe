
const firebaseConfig = {
  apiKey: "AIzaSyDlmkW0HtzuUZQR5YCsCf9uaJ1Ijom5PUY",
  authDomain: "twiter-da-shoppe.firebaseapp.com",
  databaseURL: "https://twiter-da-shoppe-default-rtdb.firebaseio.com",
  projectId: "twiter-da-shoppe",
  storageBucket: "twiter-da-shoppe.appspot.com",
  messagingSenderId: "213700606823",
  appId: "1:213700606823:web:27ee7368a74bd04d788dc2"
};

firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
