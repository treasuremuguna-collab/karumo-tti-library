// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-sncC5VIIeYH0A8pdlemIjsZMmEQPUaI",
  authDomain: "karumo-library.firebaseapp.com",
  databaseURL: "https://karumo-library-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "karumo-library",
  storageBucket: "karumo-library.firebasestorage.app",
  messagingSenderId: "327025298202",
  appId: "1:327025298202:web:e4e6f599a8168ee1587aa3",
  measurementId: "G-5M12HQETWX"
};
// 🔼 PASTE YOUR FIREBASE CONFIG HERE 🔼

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services for use in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

console.log("🔥 Firebase connected successfully!");