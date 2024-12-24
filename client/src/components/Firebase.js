// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrsNDNTTF801KMcPt8QXDO8xHjFIcaJ10",
  authDomain: "login1-591e5.firebaseapp.com",
  projectId: "login1-591e5",
  storageBucket: "login1-591e5.firebasestorage.app",
  messagingSenderId: "41749838882",
  appId: "1:41749838882:web:c8bd76e68b0f4b47691e7b",
  measurementId: "G-VVZS9X5XM6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getDatabase(app);
export default app;
