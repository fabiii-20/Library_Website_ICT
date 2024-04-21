// Login form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var valid = true;

    if (!emailRegex.test(email)) {
        document.getElementById('login-email-error').innerText = 'Please enter a valid email';
        valid = false;
    } else {
        document.getElementById('login-email-error').innerText = '';
    }

    if (password.length < 6) {
        document.getElementById('login-password-error').innerText = 'Password must be at least 6 characters';
        valid = false;
    } else {
        document.getElementById('login-password-error').innerText = '';
    }

    if (valid) {
        // You can perform form submission or other actions here
        alert('Login Successful');
        // Clear form fields
        document.getElementById('login-form').reset();
    }
});
