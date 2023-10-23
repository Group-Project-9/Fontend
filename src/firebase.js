// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jsd5-fitnessdiary.firebaseapp.com",
  projectId: "jsd5-fitnessdiary",
  storageBucket: "jsd5-fitnessdiary.appspot.com",
  messagingSenderId: "720130037819",
  appId: "1:720130037819:web:c580bec3cf932985f7241e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);