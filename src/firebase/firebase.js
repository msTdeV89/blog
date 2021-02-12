import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyANzmHwEzB8cayASgFW4-LUTUHenBkpp74",
  authDomain: "blog-f3373.firebaseapp.com",
  projectId: "blog-f3373",
  storageBucket: "blog-f3373.appspot.com",
  messagingSenderId: "916037085361",
  appId: "1:916037085361:web:cbd94500c1d159c00c9a90",
  measurementId: "G-KDT1PZFFWX",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
