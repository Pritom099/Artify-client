// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBloLsuRtZ_JuwdEl9rDCuYU-r1nCyo6I",
  authDomain: "artify-76066.firebaseapp.com",
  projectId: "artify-76066",
  storageBucket: "artify-76066.firebasestorage.app",
  messagingSenderId: "291402952298",
  appId: "1:291402952298:web:b719467526e95fc0af6413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);