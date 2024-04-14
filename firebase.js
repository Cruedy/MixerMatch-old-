// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, push, set  } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZ8I9nQkbM6X_YmMBH940c3BTeoobAzI4",
    authDomain: "mixermatch-eb4c7.firebaseapp.com",
    databaseURL: "https://mixermatch-eb4c7-default-rtdb.firebaseio.com",
    projectId: "mixermatch-eb4c7",
    storageBucket: "mixermatch-eb4c7.appspot.com",
    messagingSenderId: "918480895296",
    appId: "1:918480895296:web:ad463afb0d2634b3bc8ea5",
    measurementId: "G-Y52LS97N36"
};

// // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

if (auth) {
    console.log("Firebase is initialized correctly.");
}

// Export the Firebase database reference if needed
export { db, ref, push, set, auth, firebaseApp, signInWithEmailAndPassword, createUserWithEmailAndPassword };