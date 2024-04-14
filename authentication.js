import { initializeFirebase, getAuthInstance, signInWithEmailAndPassword } from "./firebase.js";

initializeFirebase(); // Initialize Firebase

const auth = getAuthInstance(); // Get authentication instance

if (!auth) {
    console.error("Firebase is not initialized correctly.");
}

// Sign Up with Email/Password
const signUpWithEmailAndPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission

    // Get email and password from input fields
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
});
// // Sign In with Email/Password
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// Sign Out
const signOut = () => {
    return auth.signOut();
};

// Auth State Change Listener
const onAuthStateChanged = (callback) => {
    auth.onAuthStateChanged(callback);
};

export { signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };
