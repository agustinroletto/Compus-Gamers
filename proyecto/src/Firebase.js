import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKblSCA7Caj9W8_74uki8uAwEogr1xbJQ",
  authDomain: "curso-react-c9276.firebaseapp.com",
  projectId: "curso-react-c9276",
  storageBucket: "curso-react-c9276.appspot.com",
  messagingSenderId: "240404607442",
  appId: "1:240404607442:web:68b7739888aa8283d9980b",
  measurementId: "G-JGMJ2XBH76",
};

const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();
export default db;
