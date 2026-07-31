import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCr6izSGT3pH7HDtXdCdd_B91pjBaI1gnQ",
  authDomain: "check-a976f.firebaseapp.com",
  projectId: "check-a976f",
  storageBucket: "check-a976f.firebasestorage.app",
  messagingSenderId: "284976270489",
  appId: "1:284976270489:web:11327b477a793ac724bc08",
  measurementId: "G-ZZRXMWY7RK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
