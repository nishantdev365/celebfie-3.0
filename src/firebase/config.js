import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm8e6r-YVvm9OiGryVuDXRvHGUa4uyVZc",
  authDomain: "celebfie-auth-7e4e9.firebaseapp.com",
  projectId: "celebfie-auth-7e4e9",
  storageBucket: "celebfie-auth-7e4e9.appspot.com",
  messagingSenderId: "633466937373",
  appId: "1:633466937373:web:b7be93a45d83692fb266f4",
  measurementId: "G-9CP6E18BZB"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth(app);

