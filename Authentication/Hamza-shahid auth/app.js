import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

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

//   const togglePassword = document.getElementById('togglePassword')
//   if(togglePassword){
//   togglePassword.addEventListener('click', (inputId)=> {
//     console.log(inputId.srcElement.form.childNodes[5].childNodes[3])
//     const input = document.getElementById(inputId);
//     const button = input.nextElementSibling;
//     if (input.type === 'password') {
//         input.type = 'text';
//         button.textContent = '🙈';
//     } else {
//         input.type = 'password';
//         button.textContent = '👁️';
//     }
// })
// }
const getSignup = document.getElementById('signupForm')
if (getSignup) {
  getSignup.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById("semail").value.trim()
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        alert('Account created successfully!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  });
}


// login.js

// Toggle password visibility
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

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const remember = document.getElementById('remember').checked;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
        });
      console.log('Login attempt:', { email, password, remember });
      alert('Login successful!');
    });
  }
  const provider = new GoogleAuthProvider();
  const gBtn = document.getElementById("gbtn")
  gBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      });
  })

});


