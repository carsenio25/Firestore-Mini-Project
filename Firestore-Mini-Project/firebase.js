// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_API_KEY,
    // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    // projectId: import.meta.env.VITE_PROJECT_ID,
    // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    // appId: import.meta.env.VITE_APP_ID,
    apiKey: "AIzaSyA134ACVrbJ2PbIPxBOldZ90C-v87z2o2k",
  authDomain: "firestore-mini-project-1fd1e.firebaseapp.com",
  projectId: "firestore-mini-project-1fd1e",
  storageBucket: "firestore-mini-project-1fd1e.appspot.com",
  messagingSenderId: "445858003690",
  appId: "1:445858003690:web:33934d2e0ae19eeec73593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };