import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4O1XJZJ0UlG9et7w6sNXUzBM3l73yf2c",
  authDomain: "universityofnature25.firebaseapp.com",
  projectId: "universityofnature25",
  storageBucket: "universityofnature25.firebasestorage.app",
  messagingSenderId: "372533385186",
  appId: "1:372533385186:web:f7125dd3132bbbe5210bbb",
  measurementId: "G-QCJ8SKLKEH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);