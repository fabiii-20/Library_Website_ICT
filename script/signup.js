// Signup form validation
document.getElementById('signup-form').addEventListener('submit', function(eventSignup) {
    eventSignup.preventDefault();
    var name = document.getElementById('signup-name').value;
    var signupEmail = document.getElementById('signup-email').value;
    var signupPassword = document.getElementById('signup-password').value; 
    var dob = document.getElementById('signup-dob').value;
    var phone = document.getElementById('signup-phone').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var zip = document.getElementById('signup-zip').value;
    var validSignup = true;

    if (name.trim() === '') {
        document.getElementById('signup-name-error').innerText = 'Please enter your full name';
        validSignup = false;
    } else {
        document.getElementById('signup-name-error').innerText = '';
    }
    if (!emailRegex.test(signupEmail)) {
        document.getElementById('signup-email-error').innerText = 'Please enter a valid email';
        validSignup = false;
    } else {
        document.getElementById('signup-email-error').innerText = '';
    }

    if (signupPassword.length < 6) {
        document.getElementById('signup-password-error').innerText = 'Password must be at least 6 characters';
        validSignup = false;
    } else {
        document.getElementById('signup-password-error').innerText = '';
    }
    if (dob === '') {
        document.getElementById('signup-dob-error').innerText = 'Please select your date of birth';
        validSignup = false;
    } else {
        document.getElementById('signup-dob-error').innerText = '';
    }

    if (phone.trim() === '') {
        document.getElementById('signup-phone-error').innerText = 'Please enter your phone number';
        validSignup = false;
    } else {
        document.getElementById('signup-phone-error').innerText = '';
    }
    if (zip.length<6) {
        document.getElementById('signup-phone-error').innerText = 'Zip code contain 6 numbers';
        validSignup = false;
    } else {
        document.getElementById('signup-phone-error').innerText = '';
    }

    if (validSignup) {
        // You can perform form submission or other actions here
        alert('Signup Successful');
        // Clear form fields
        document.getElementById('signup-form').reset();
    }
});
