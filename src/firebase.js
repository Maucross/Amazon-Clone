// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//esto tres lineas de abajo reemplazan a lo que, al parecer
// antes solamente se ponia:
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBvtziwoljVG0w_n_wp2CTYi9WMteuzRHk",
    authDomain: "clone-fe323.firebaseapp.com",
    projectId: "clone-fe323",
    storageBucket: "clone-fe323.appspot.com",
    messagingSenderId: "1080146732407",
    appId: "1:1080146732407:web:4719821745dd505deced72",
    measurementId: "G-3X8C9WZJC2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};