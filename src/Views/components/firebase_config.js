import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaAdnQkI2sjh2QPrpa1hR4gKVMWGZWncg",
  authDomain: "todoapp-98a6a.firebaseapp.com",
  projectId: "todoapp-98a6a",
  storageBucket: "todoapp-98a6a.appspot.com",
  messagingSenderId: "702263276050",
  appId: "1:702263276050:web:0562b88d891a0c6ae75ecb",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
