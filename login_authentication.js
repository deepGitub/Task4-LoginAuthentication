// Hardcoded username and password for demonstration purposes
const validUsername = "user";
const validPassword = "password";

function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === validUsername && password === validPassword) {
        // Authentication successful
        message.innerText = "Login successful!";
        message.style.color = "green";
        // Redirect to a new page or perform other actions upon successful login
        // For example: window.location.href = "dashboard.html";
    } else {
        // Authentication failed
        message.innerText = "Invalid username or password";
        message.style.color = "red";
    }
}
