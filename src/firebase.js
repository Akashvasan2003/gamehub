// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyChNCOAWKWuzvJFwOX8LIAkBharVwd0LSc",
  authDomain: "gaminghub-8f6c7.firebaseapp.com",
  projectId: "gaminghub-8f6c7",
  storageBucket: "gaminghub-8f6c7.firebasestorage.app",
  messagingSenderId: "822787301071",
  appId: "1:822787301071:web:1cddde1e6a89800662e1ba",
  measurementId: "G-H652YNVD7L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
