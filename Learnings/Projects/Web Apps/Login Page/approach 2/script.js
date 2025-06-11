const auth = firebase.auth();
const db = firebase.database(); // or firebase.firestore();

document.getElementById("signup-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Save additional data
      db.ref("users/" + user.uid).set({
        email: user.email,
        createdAt: new Date().toISOString()
      });

      alert("Signup successful");
      window.location.href = "login.html";
    })
    .catch((error) => {
      document.getElementById("signup-message").innerText = error.message;
    });
});


document.getElementById("login-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("login-message").innerText = error.message;
    });
});

auth.onAuthStateChanged((user) => {
  if (!user) {
    // Not logged in
    window.location.href = "login.html";
  }
});

function logout() {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
}
