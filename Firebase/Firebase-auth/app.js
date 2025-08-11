// Add SweetAlert2 in your HTML head or before this script
// <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFp39U0vIOawr6s3vExdrkpWdFEbPFQ-0",
  authDomain: "authentication-64041.firebaseapp.com",
  projectId: "authentication-64041",
  storageBucket: "authentication-64041.firebasestorage.app",
  messagingSenderId: "1044388501818",
  appId: "1:1044388501818:web:2f87ea37b6ee71af241803",
  measurementId: "G-VG58W8N8G6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function StogglePassword(inputId) {
  const input = document.getElementById(inputId);
  const button = input.nextElementSibling;
  if (input.type === 'password') {
    input.type = 'text';
    button.textContent = '🙈';
  } else {
    input.type = 'password';
    button.textContent = '👁️';
  }
}

// SIGNUP FORM HANDLER
const getSignup = document.getElementById('signupForm');
if (getSignup) {
  getSignup.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById("semail").value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      Swal.fire('Oops!', 'Passwords do not match!', 'error');
      return;
    }

    Swal.fire({ title: 'Creating account...', didOpen: () => Swal.showLoading(), allowOutsideClick: false });

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(user, { displayName: fullName });

        Swal.fire({
          title: 'Success!',
          text: 'Account created successfully!',
          icon: 'success',
          confirmButtonText: 'Go to Login'
        }).then(() => {
          window.location.href = './login.html';
        });
      })
      .catch((error) => {
        Swal.fire('Error', error.message, 'error');
      });
  });
}

// LOGIN PASSWORD TOGGLE
export function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const button = input.nextElementSibling;

  if (input.type === 'password') {
    input.type = 'text';
    button.textContent = '🙈';
  } else {
    input.type = 'password';
    button.textContent = '👁️';
  }
}

// LOGIN FORM HANDLER
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const remember = document.getElementById('remember').checked;

      Swal.fire({ title: 'Logging in...', didOpen: () => Swal.showLoading(), allowOutsideClick: false });

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem('authUser', JSON.stringify(user));

          Swal.fire({
            title: 'Welcome!',
            text: `Hello, ${user.displayName || 'User'}!`,
            icon: 'success',
            confirmButtonText: 'Go to Dashboard'
          }).then(() => {
            window.location.href = "./dashboard.html";
          });
        })
        .catch((error) => {
          Swal.fire('Login Failed', error.message, 'error');
        });
    });
  }

  // GOOGLE LOGIN
  const provider = new GoogleAuthProvider();
  const gBtn = document.getElementById("gbtn");
  if (gBtn) {
    gBtn.addEventListener("click", () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          Swal.fire({
            title: 'Welcome!',
            text: `Logged in as ${result.user.displayName || 'User'}`,
            icon: 'success'
          });
          localStorage.setItem('authUser', JSON.stringify(result.user));
          window.location.href = "./dashboard.html";
        })
        .catch((error) => {
          Swal.fire('Google Login Failed', error.message, 'error');
        });
    });
  }
});
