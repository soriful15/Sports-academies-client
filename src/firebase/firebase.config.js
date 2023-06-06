// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4s1jmaAR6RsgPAeJiEH4lM_3ZUxHy9WE",
  authDomain: "sports-academies-e3c24.firebaseapp.com",
  projectId: "sports-academies-e3c24",
  storageBucket: "sports-academies-e3c24.appspot.com",
  messagingSenderId: "760855043200",
  appId: "1:760855043200:web:1649be12f3c53160155a65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app