// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    const showError = (id, message) => {
        document.getElementById(id).textContent = message;
    };

    const clearErrors = () => {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.textContent = '');
    };

    // Toggle Password Visibility
    const togglePasswordBtn = document.querySelector('.toggle-password');
    togglePasswordBtn.addEventListener('click', () => {
        const type = password.type === 'password' ? 'text' : 'password';
        password.type = type;
        togglePasswordBtn.textContent = type === 'password' ? '👁️' : '🙈';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let valid = true;

        if (firstName.value.trim() === '') {
            showError('first-name-error', 'First name is required.');
            valid = false;
        }

        if (lastName.value.trim() === '') {
            showError('last-name-error', 'Last name is required.');
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            showError('email-error', 'Please enter a valid email.');
            valid = false;
        }

        if (password.value.length < 6) {
            showError('password-error', 'Password must be at least 6 characters.');
            valid = false;
        }

        if (password.value !== confirmPassword.value) {
            showError('confirm-password-error', 'Passwords do not match.');
            valid = false;
        }

        if (valid) {
            alert('Form submitted successfully!');
            // Here you can handle backend integration
        }
    });
});

  window.onload = () => {
    google.accounts.id.initialize({
      client_id: '990574923767-1jjb6m44co1u970qmn8j0t96n71jb9r7.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("google-signin-btn"),
      { theme: "outline", size: "large" }
    );
  };

  function handleCredentialResponse(response) {
    const jwt = response.credential;
    const userData = parseJwt(jwt);
    console.log("User Data:", userData);

    alert(`Welcome, ${userData.name}!`);
    window.location.href = "../LANDING-PAGE/index.html"; // Redirect after login
  }

  function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = decodeURIComponent(atob(base64Url).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(base64);
  }

