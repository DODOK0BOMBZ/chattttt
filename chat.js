
const firebaseConfig = {
    apiKey: "AIzaSyA65d3Ag2welxBs12E1oaLyWuR9awKkT2s",
    authDomain: "madoka-6fbd7.firebaseapp.com",
    databaseURL: "https://madoka-6fbd7-default-rtdb.firebaseio.com",
    projectId: "madoka-6fbd7",
    storageBucket: "madoka-6fbd7.appspot.com",
    messagingSenderId: "802459301278",
    appId: "1:802459301278:web:1e445fd72a051d6d8a128f"
  };
  
  


// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



