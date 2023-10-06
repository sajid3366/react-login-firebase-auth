// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfw3cjvQfEhvvsgRV1EGuLB27kbm1FbWU",
  authDomain: "react-login-firebase-auth.firebaseapp.com",
  projectId: "react-login-firebase-auth",
  storageBucket: "react-login-firebase-auth.appspot.com",
  messagingSenderId: "1007962651637",
  appId: "1:1007962651637:web:f98d505c180fd6f2743ebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;