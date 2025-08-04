
  function signup() {
    let getEmail = document.getElementById('email').value;
    let getPass = document.getElementById('password').value;

    if (getEmail && getPass) {
        localStorage.setItem("userEmail", getEmail)
        localStorage.setItem("userPass", getPass)
      Swal.fire({
        title: 'Sign Up Successful!',
        text: 'Redirecting to login page...',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true
      }).then(() => {
        // Redirect to login.html
        window.location.href = './login.html';
      });
    } else {
      // Show error if fields are empty
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all fields.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }


  document.getElementById('togglePassword').addEventListener('click', function() {
    const password = document.getElementById('password');
    const icon = this.querySelector('i');
    
    if (password.type === 'password') {
        password.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        password.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

function login() {
    let getEmail = document.getElementById('email').value;
    let getPass = document.getElementById('password').value;
    if (getEmail == localStorage.getItem("userEmail") && getPass == localStorage.getItem("userPassword")) {
      Swal.fire({
        title: 'Log In Successful!',
        text: 'Redirecting to Home page...',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true
      }).then(() => {
        window.location.href = './index.html';
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all fields Correctly.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }

};