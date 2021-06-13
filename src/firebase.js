// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYqeKtj6ZEPGpEwawYNH2SLL76JVF-4F8",
  authDomain: "art-ug.firebaseapp.com",
  projectId: "art-ug",
  storageBucket: "art-ug.appspot.com",
  messagingSenderId: "543666737930",
  appId: "1:543666737930:web:8faf7ce969eb075858e0f3",
  measurementId: "G-WJ0XZXLKZC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
