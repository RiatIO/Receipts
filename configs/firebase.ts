import firebase from "firebase/app";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBcQYJM6GTxTwQqRnikNKYPq1DkAIr0ovs",
  authDomain: "receipts-d204c.firebaseapp.com",
  projectId: "receipts-d204c",
  storageBucket: "receipts-d204c.appspot.com",
  messagingSenderId: "733220168899",
  appId: "1:733220168899:web:1034e180200a2a7acbae76",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
