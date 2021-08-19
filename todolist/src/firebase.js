// For Firebase JS SDK v7.20.0 and later, measurementId is optional


 import firebase from "firebase";
 const firebaseApp =firebase.initializeApp({ 
 apiKey: "AIzaSyAnENMhHsT_YMNGxE-TFVgQHGbk18EG7J8",
 authDomain: "todo-app-50e8e.firebaseapp.com",
 projectId: "todo-app-50e8e",
 storageBucket: "todo-app-50e8e.appspot.com",
 messagingSenderId: "363351862366",
 appId: "1:363351862366:web:812a246f5f342d337f18cf",
 measurementId: "G-1YH006QR1V"
 });
  const db = firebaseApp.firestore();
  export default db;