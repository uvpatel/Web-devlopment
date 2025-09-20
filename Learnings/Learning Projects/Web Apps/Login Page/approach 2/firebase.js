  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBpM3TQkXWFhm9g28qBbzX1zf4sdlJEyaU",
    authDomain: "dashboard-69d47.firebaseapp.com",
    projectId: "dashboard-69d47",
    storageBucket: "dashboard-69d47.firebasestorage.app",
    messagingSenderId: "458163055742",
    appId: "1:458163055742:web:6fb184fde526144ba3fc2f",
    measurementId: "G-TVRRFK0L8E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
