// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYc1aB1ISqTDf3MlF6rSN6uY-lr_CBZXo",
  authDomain: "scholarsenseedutech-57154.firebaseapp.com",
  projectId: "scholarsenseedutech-57154",
  storageBucket: "scholarsenseedutech-57154.appspot.com",
  messagingSenderId: "320591062350",
  appId: "1:320591062350:web:8337b2a9962a013298ea1f",
  measurementId: "G-SZ6S29XLD5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth. app)

export { auth };