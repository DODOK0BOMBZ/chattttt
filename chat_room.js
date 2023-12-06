
const firebaseConfig = {
  apiKey: "AIzaSyA65d3Ag2welxBs12E1oaLyWuR9awKkT2s",
  authDomain: "madoka-6fbd7.firebaseapp.com",
  databaseURL: "https://madoka-6fbd7-default-rtdb.firebaseio.com",
  projectId: "madoka-6fbd7",
  storageBucket: "madoka-6fbd7.appspot.com",
  messagingSenderId: "802459301278",
  appId: "1:802459301278:web:1e445fd72a051d6d8a128f"
};

firebase.initializeApp(firebaseConfig);

function getData()
{
  firebase.database().ref("/").on('value', function (snapshot)
  {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
    {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Nome da sala: " + Room_names);

      row = "<div class'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+
      Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
  }
  getData();
  function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}