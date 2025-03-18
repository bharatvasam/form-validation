// script.js

// Function to validate the form when submitted
function validateForm() {
    // Get form elements
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Clear previous errors
    clearErrors();

    let isValid = true;

    // Validate Full Name
    if (fullName.length < 5) {
        showError("nameError", "Full Name must be at least 5 characters long.");
        isValid = false;
    }

    // Validate Email
    if (!email.includes('@')) {
        showError("emailError", "Enter a valid email address.");
        isValid = false;
    }

    // Validate Phone Number
    if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
        showError("phoneError", "Phone number must be a 10-digit number and not '123456789'.");
        isValid = false;
    }

    // Validate Password
    if (password === "password" || password === fullName || password.length < 8) {
        showError("passwordError", "Password must be at least 8 characters long, not 'password' or your name.");
        isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        showError("confirmPasswordError", "Passwords do not match.");
        isValid = false;
    }

    return isValid;  // If any field is invalid, the form will not submit
}

// Function to show error message
function showError(field, message) {
    document.getElementById(field).innerText = message;
}

// Function to clear previous error messages
function clearErrors() {
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
}

// Event listener for input fields
document.getElementById("fullName").addEventListener("input", clearErrors);
document.getElementById("email").addEventListener("input", clearErrors);
document.getElementById("phone").addEventListener("input", clearErrors);
document.getElementById("password").addEventListener("input", clearErrors);
document.getElementById("confirmPassword").addEventListener("input", clearErrors);
