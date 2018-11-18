import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfebo3lPIg8g82w7Zl_YNYYXDGw3unqpw",
    authDomain: "teko-449de.firebaseapp.com",
    databaseURL: "https://teko-449de.firebaseio.com",
    projectId: "teko-449de",
    storageBucket: "teko-449de.appspot.com",
    messagingSenderId: "257324425236"
  });

  const db = firebaseApp.firestore();