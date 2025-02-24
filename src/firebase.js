// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCi6GKNABwzkxkoIpK2aNbxPrIc8VmoIQI",
  authDomain: "finance-tracker-46398.firebaseapp.com",
  projectId: "finance-tracker-46398",
  storageBucket: "finance-tracker-46398.firebasestorage.app",
  messagingSenderId: "146544296820",
  appId: "1:146544296820:web:e1abd0a3c7c8822a09e221",
  measurementId: "G-GXJEMT68FB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

// Default export
export default firestore;

