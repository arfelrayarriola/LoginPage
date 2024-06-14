document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate username and password (you'd do this server-side in a real app)
    if (username === "Hello" && password === "Hello1234") {
        alert("Login successful!");
        // Redirect to a dashboard or home page
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
