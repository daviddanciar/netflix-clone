import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArpjlW0ytmPTkE6pU3Hd_rUFHeczi3IzE",
  authDomain: "netflix-project-51552.firebaseapp.com",
  projectId: "netflix-project-51552",
  storageBucket: "netflix-project-51552.appspot.com",
  messagingSenderId: "897584119995",
  appId: "1:897584119995:web:9215073a5ea102f97fa99e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
