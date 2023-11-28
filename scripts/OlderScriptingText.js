// function writeUserData(userId, name, email, password) {
//   set(ref(db, "users/" + userId), {
//     username: name,
//     email: email,
//     password: password,
//   });
// }

// document.getElementById("btn").addEventListener("click", () => {
//   let id = document.getElementById("userId");
//   let name = document.getElementById("userName");
//   let email = document.getElementById("email");
//   let password = document.getElementById("pass");

//   writeUserData(id.value, name.value, email.value, password.value);
//   console.log("success");
// });

// function getAllProducts() {
//   const productsContainer = document.getElementById("products");
//   const userRef = ref(db, "users");

//   get(userRef)
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         productsContainer.innerHTML = "";
//         console.log(snapshot);
//         snapshot.forEach((childSnapshot) => {
//           const user = childSnapshot.val();
//           productsContainer.innerHTML += `<p>User ID: ${childSnapshot.key}, Username: ${user.username}, Email: ${user.email}</p>`;
//         });
//       } else {
//         productsContainer.innerHTML = "No users found";
//       }
//     })
//     .catch((error) => {
//       console.error("error getting data: ", error);
//     });
// }

// window.onload = getAllProducts;

// var userName = prompt("mohsin Nawaz");
// document
//   .querySelector("#myForm")
//   .addEventListener("submit", (event) => sendMessage(event));

// function sendMessage(e) {
//   e.preventDefault();
// var isMessage = document.getElementById("message").value.trim();
// if (isMessage !== "") {
//   const dataRef = ref(db, "users/");
//   const newRef = push(dataRef, {
//     sender: userName,
//     message: isMessage,
//   });
//   console.log("success");
// } else {
//   alert("You must write something");
//   console.log("failed");
// }
// }

// function chatApp() {
//   var mainDiv = document.getElementById("chatApp");
//   var userRef = ref(db, "users");

// get(userRef)
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       mainDiv.innerHTML = "";
//       snapshot.forEach((childSnapshot) => {
//         const user = childSnapshot.val();
//         mainDiv.innerHTML += `<p>${user.sender} : ${user.message}</p>`;
//       });
//     } else {
//       console.log("No Data Found");
//     }
//   })
//   .catch((error) => {
//     console.error("error getting data", error);
//   });
// }
