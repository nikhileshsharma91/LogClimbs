// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwnc9MP7xjWy3zE_puVr-4ysfkFQnZA3E",
  authDomain: "logclimbs.firebaseapp.com",
  projectId: "logclimbs",
  storageBucket: "logclimbs.appspot.com",
  messagingSenderId: "628550267695",
  appId: "1:628550267695:web:efe1cd99717b020995a7da",
  measurementId: "G-D2YMSRJVJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);