import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/functions';

const firebaseConfig = {
  // Configurações do Firebase
  apiKey: "AIzaSyDUfwLknvK_nXfgM87h7WcRQc7MAmbgNBg",
  authDomain: "instagram-clone-curso-adee5.firebaseapp.com",
  projectId: "instagram-clone-curso-adee5",
  storageBucket: "instagram-clone-curso-adee5.appspot.com",
  messagingSenderId: "26048649979",
  appId: "1:26048649979:web:f6c3588df2b63412f22e5e",
  measurementId: "G-V5PYWTFG7C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const functions = firebaseApp.functions();

export { db, auth, storage, functions };
