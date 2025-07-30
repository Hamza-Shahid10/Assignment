  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

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


  function togglePassword(inputId) {
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

if(getSignup){
const getSignup = document.getElementById('signupForm')
getSignup.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById("semail")
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
     const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    // Here you would typically send the data to your server
    alert('Account created successfully!');
});
}