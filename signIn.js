import {signInWithEmailAndPassword, auth } from './firebase.js';

// Function to handle login form submission
const handleLogin = (event) => {
    event.preventDefault();

    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            var user = userCredential.user;
            // Redirect or do something else upon successful login
            window.location.href = "quizPage.html";
        })
        .catch((error) => {
            // Handle errors
            const errorMessage = "Email or password is incorrect."//error.message;
            document.querySelector('.form__message--error').innerText = errorMessage;
        });
};

// Add event listener to the login form
document.getElementById('login').addEventListener('submit', handleLogin);
