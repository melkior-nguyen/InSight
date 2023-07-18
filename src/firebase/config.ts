import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmpd0uoxkaLxhFt11zRZjDFV68Die8qm4",
  authDomain: "alta-insight.firebaseapp.com",
  projectId: "alta-insight",
  storageBucket: "alta-insight.appspot.com",
  messagingSenderId: "171047047752",
  appId: "1:171047047752:web:b3a1e632f2baa9a80c7e7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app)
