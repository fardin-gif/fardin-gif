/**
 * PHY-LIGA — Shared Firebase Initialization
 * ------------------------------------------------------
 * This is the ONLY file where Firebase credentials live.
 * Every page (register.html, players.html, admin/*.html, etc.)
 * imports `db` (and `auth` where needed) from here.
 *
 * HOW TO SET THIS UP (do this manually after receiving the code):
 * 1. Go to https://console.firebase.google.com
 * 2. Create a project (e.g. "phy-liga").
 * 3. Project Settings → General → Your apps → Add app → Web ( </> ).
 * 4. Copy the firebaseConfig object Firebase gives you and paste it
 *    below, replacing the placeholder values.
 * 5. Enable Firestore Database (Build → Firestore Database → Create).
 * 6. Enable Authentication → Sign-in method → Email/Password
 *    (only needed for the admin pages).
 * 7. Paste the security rules from the PHY-LIGA Master Prompt
 *    (Section 4.4) into Firestore → Rules → Publish.
 *
 * Do NOT commit real API keys to a public repo's README or docs —
 * the apiKey below is safe to expose in client code (Firebase is
 * designed this way), but access control must always come from
 * Firestore Security Rules, not from hiding this key.
 */

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
