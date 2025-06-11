// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfDm08BNOg11d7faw_WErzWFkqSAsm2B4",
  authDomain: "login-form-c62ee.firebaseapp.com",
  projectId: "login-form-c62ee",
  storageBucket: "login-form-c62ee.firebasestorage.app",
  messagingSenderId: "796070033775",
  appId: "1:796070033775:web:a90fbe2840c196ad3a509a",
  measurementId: "G-YLZ924QMWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Handle Sign Up
const submitSignUp = document.getElementById('submitSignUp');
submitSignUp.addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.getElementById('rEmail').value;
  const password = document.getElementById('rPassword').value;
  const signUpMsg = document.getElementById('signUpMessage');

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      signUpMsg.style.display = 'block';
      signUpMsg.style.color = 'green';
      signUpMsg.innerText = "✅ Registration successful!";
    })
    .catch((error) => {
      signUpMsg.style.display = 'block';
      signUpMsg.style.color = 'red';
      signUpMsg.innerText = `❌ ${error.message}`;
    });
});

// Handle Sign In
const submitSignIn = document.getElementById('submitSignIn');
submitSignIn.addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const signInMsg = document.getElementById('signInMessage');

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      signInMsg.style.display = 'block';
      signInMsg.style.color = 'green';
      signInMsg.innerText = "✅ Login successful!";
    })
    .catch((error) => {
      signInMsg.style.display = 'block';
      signInMsg.style.color = 'red';
      signInMsg.innerText = `❌ ${error.message}`;
    });
});
