import firebase from "firebase";

const firebaseConfig = {
  apiKey: "ApiKey",
  authDomain: "twitter-clone-d0d59.firebaseapp.com",
  databaseURL: "https://twitter-clone-d0d59.firebaseio.com",
  projectId: "twitter-clone-d0d59",
  storageBucket: "twitter-clone-d0d59.appspot.com",
  messagingSenderId: "429555167029",
  appId: "1:429555167029:web:0dd149d1a37f781606667c",
  measurementId: "G-FTNSFT0L1K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
