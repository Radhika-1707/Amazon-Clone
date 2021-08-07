// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCunq78xmLiwDhEsjHCbKtE2qj8oGAtFRs",
    authDomain: "clone-6b526.firebaseapp.com",
    projectId: "clone-6b526",
    storageBucket: "clone-6b526.appspot.com",
    messagingSenderId: "215893329760",
    appId: "1:215893329760:web:4724b21ff804e601d20005",
    measurementId: "G-0W1GQ8W00K"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);   //will initialise the App

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export{db,auth};