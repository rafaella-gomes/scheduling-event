import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "scheduling-event-af65f.firebaseapp.com",
  projectId: "scheduling-event-af65f",
  storageBucket: "scheduling-event-af65f.appspot.com",
  messagingSenderId: "954130364514",
  appId: "1:954130364514:web:82c8145587c509f0a0793b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
