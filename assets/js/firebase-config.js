import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgAxMwL72Aa_youPEpkU15ndh7jNa0YmE",
  authDomain: "phy-liga-01.firebaseapp.com",
  projectId: "phy-liga-01",
  storageBucket: "phy-liga-01.firebasestorage.app",
  messagingSenderId: "784941937687",
  appId: "1:784941937687:web:66e1c74f2f4b6d9ba39852"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);