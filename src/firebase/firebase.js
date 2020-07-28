import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default, firebase };

//child_removed

// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

//child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

//child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot,
//     });
//   });
//   console.log(expenses);
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "Anther expense",
//   note: "",
//   amount: 109500,
//   createdAt: 100000,
// });

// database.ref("notes/-MDAMlNbSZ2Qqj9Gl7AJ").remove();

// database.ref("notes").push({
//   title: "Course topics",
//   body: "react native, python",
// });

// const firebaseNotes = {
//   notes: {
//     fdsaf: {
//       title: "First Note",
//       body: "This is my note",
//     },
//     fdsafd: {
//       title: "Another One Note",
//       body: "This is my note",
//     },
//   },
// };

// const notes = [
//   {
//     id: "12",
//     title: "first note",
//     body: "this is my note",
//   },
//   {
//     id: "13",
//     title: "second note",
//     body: "this is my note",
//   },
// ];

// database.ref("notes").set(notes);

// database.ref().on("value", (snapshot) => {
//   console.log(snapshot.val());
// });

// setTimeout(() => {
//   database.ref("age").set(55);
// }, 3500);

// setTimeout(() => {
//   database.ref().off();
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(66);
// }, 10500);

// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// database
//   .ref()
//   .set({
//     name: "goti",
//     age: 22,
//     location: {
//       city: "Decatur",
//       country: "United States",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((error) => {
//     console.log("this failed", error);
//   });

// // database.ref("isSingle").set(null);

// database.ref().update({
//   name: "GJ",
//   age: 11,
//   job: "Software manager",
//   "location/city": 'Bos',
//   isSingle: null,
// });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("it is removed");
//   })
//   .catch((error) => {
//     console.log("Not removed", error);
//   });
