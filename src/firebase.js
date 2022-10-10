import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAUBepRFtOwAUWyUxlIXO3ymVbPYrBLNPg",
    authDomain: "linkedin-clone-b1e83.firebaseapp.com",
    projectId: "linkedin-clone-b1e83",
    storageBucket: "linkedin-clone-b1e83.appspot.com",
    messagingSenderId: "184322007348",
    appId: "1:184322007348:web:1ddeb66ecc4ed9a4934561"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };