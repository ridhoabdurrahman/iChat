import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7SmgdwfgnqgiDfP6l4HKnYj6GFmxMymQ",
  authDomain: "ichat-55857.firebaseapp.com",
  projectId: "ichat-55857",
  storageBucket: "ichat-55857.appspot.com",
  messagingSenderId: "656675145758",
  appId: "1:656675145758:web:658addccce46a0c4b6460f",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
