// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8yIckl1gQwAZNoqY9Z8SFARCRfD-4NVo",
  authDomain: "travel-mingle.firebaseapp.com",
  projectId: "travel-mingle",
  storageBucket: "travel-mingle.appspot.com",
  messagingSenderId: "676926715251",
  appId: "1:676926715251:web:7369a040cafdd37ef24106",
  measurementId: "G-KKPHH2DEE7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);  