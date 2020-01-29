import Firebase from "firebase";

let config = {
  apiKey: "AIzaSyDHTYUsISrvEtWKYH8i6g7K239c9M80PwA",
  authDomain: "werewolf-multiplayer-ea8d0.firebaseapp.com",
  databaseURL: "https://werewolf-multiplayer-ea8d0.firebaseio.com",
  projectId: "werewolf-multiplayer-ea8d0",
  storageBucket: "werewolf-multiplayer-ea8d0.appspot.com",
  messagingSenderId: "331278225210",
  appId: "1:331278225210:web:75a8255a30e29bb1e14a03",
  measurementId: "G-P7E17HSTHB"
};

let app = Firebase.initializeApp(config);

export const db = app.database();
