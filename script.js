import {
  db,
  set,
  ref,
  get,
  push,
  child,
  update,
  remove,
  getStorage,
  sref,
  uploadBytesResumable,
  getDownloadURL,
  onChildAdded,
} from "./firebase/firebaseConfig.js";

const dateNow = new Date();
const currTime = `${dateNow
  .getHours()
  .toString()
  .padStart(2, "0")}:${dateNow.getMinutes().toString().padStart(2, "0")}`;

var chatDiv = document.getElementById("chat");
var messageInput = document.getElementById("messageInput");
var sendBtn = document.getElementById("SendBtn");

sendBtn.addEventListener("click", () => {
  sendMessage();
});

messageInput.addEventListener("keydown", keyPresser);

function keyPresser(event) {
  if (event.code === "Enter") {
    sendMessage();
  }
}

var messagesRef = ref(db, "users");

onChildAdded(messagesRef, (snapshot) => {
  console.log(snapshot.val().user);
  const message = snapshot.val();
  displayMessage(message);
});

(function () {
  var currUser = sessionStorage.getItem("name");
  if (currUser === null) {
    var userName = prompt("Enter your Name: ");
    sessionStorage.setItem("name", `${userName} `);
  }
})();
let userName = sessionStorage.getItem("name");

console.log(userName);

function sendMessage() {
  var messageText = messageInput.value;
  if (messageText.trim() !== "") {
    push(messagesRef, {
      user: userName,
      message: messageText,
      delivered: currTime,
    });
    messageInput.value = "";
  }
}

function displayMessage(message) {
  var messageElement = document.createElement("div");
  messageElement.textContent = `${message.user} : ${message.message} ${message.delivered}`;
  messageElement.className = `${
    message.user === userName ? "sender-message" : "receiver-message"
  } `;
  chatDiv.appendChild(messageElement);
}
