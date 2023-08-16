import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "fire-store-7a8b4.firebaseapp.com",
  projectId: "fire-store-7a8b4",
  storageBucket: "fire-store-7a8b4.appspot.com",
  messagingSenderId: "339555777801",
  appId: "1:339555777801:web:44156537cd7ba155ade7d8"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export { db }