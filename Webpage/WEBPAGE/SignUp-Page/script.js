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