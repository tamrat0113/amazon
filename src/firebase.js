
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC-swnCs5sZK3j5VcICytKsK_VPkEfMikw",
    authDomain: "project-f9105.firebaseapp.com",
    projectId: "project-f9105",
    storageBucket: "project-f9105.appspot.com",
    messagingSenderId: "969476935752",
    appId: "1:969476935752:web:3cae2a1c2777d5f700087d",
    measurementId: "G-F6N93G89ZY"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db, auth };