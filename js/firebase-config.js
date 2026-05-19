// Firebase Configuration
// Project: monitoring-iot-29ac6

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUTkkUgSc9B5w2LC1Bk22DNDvu1h_WoU8",
  authDomain: "anakit-bb383.firebaseapp.com",
  databaseURL: "https://anakit-bb383-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "anakit-bb383",
  storageBucket: "anakit-bb383.firebasestorage.app",
  messagingSenderId: "265757518523",
  appId: "1:265757518523:web:ee1eb4b9e36d68a24b179e",
  measurementId: "G-XH06S279CZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
