import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbe7uBPKI56MHBfFF4KrZgaiax0sm_RzU",
  authDomain: "alta-cms-ticket-sales.firebaseapp.com",
  projectId: "alta-cms-ticket-sales",
  storageBucket: "alta-cms-ticket-sales.appspot.com",
  appId: "1:1727390547:web:2d8c3f111a52db563177a6"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app)



// other
// apiKey: "AIzaSyAmpd0uoxkaLxhFt11zRZjDFV68Die8qm4",
//   authDomain: "alta-insight.firebaseapp.com",
//   projectId: "alta-insight",
//   storageBucket: "alta-insight.appspot.com",
//   messagingSenderId: "171047047752",
//   appId: "1:171047047752:web:b3a1e632f2baa9a80c7e7d"