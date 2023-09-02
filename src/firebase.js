import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAFB5ZIp3YxFCAcPRDrUSfFWmojkxoXvns",
  authDomain: "react-hooks-blog-360e9.firebaseapp.com",
  projectId: "react-hooks-blog-360e9",
  storageBucket: "react-hooks-blog-360e9.appspot.com",
  messagingSenderId: "566546961613",
  appId: "1:566546961613:web:318a7564156bbd9b4cc584"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();