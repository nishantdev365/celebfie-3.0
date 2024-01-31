// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlDHXuhnLvvukaFoEJg-PvbJfJoXqTmrc",
  authDomain: "celebfie-auth.firebaseapp.com",
  projectId: "celebfie-auth",
  storageBucket: "celebfie-auth.appspot.com",
  messagingSenderId: "1085508479100",
  appId: "1:1085508479100:web:f03dae0c52f0d73d3cc1f9",
  measurementId: "G-L41GM57M33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Remove the unused variable assignment
export  const auth = getAuth(app);
