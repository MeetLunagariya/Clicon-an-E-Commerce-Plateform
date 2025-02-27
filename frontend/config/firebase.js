// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYLylHIHupxPBgG_JO4jk9uhSpLJYv5nw",
  authDomain: "clickon-288a9.firebaseapp.com",
  projectId: "clickon-288a9",
  storageBucket: "clickon-288a9.firebasestorage.app",
  messagingSenderId: "226261631033",
  appId: "1:226261631033:web:82a7dc47b9197e9d5c0de8",
  measurementId: "G-N4VSS1203V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

