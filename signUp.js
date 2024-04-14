import {createUserWithEmailAndPassword, auth } from './firebase.js';

// Function to handle login form submission
const handleLogin = (event) => {
    event.preventDefault();

    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        window.location.href = "quizPage.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
};

// Add event listener to the login form
document.getElementById('createAccount').addEventListener('submit', handleLogin);