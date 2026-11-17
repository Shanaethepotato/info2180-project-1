document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("newsletter");
    const emailInput = document.getElementById("email");
    const message = document.querySelector(".message")

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = emailInput.value;

        if (email===""){
            message.textContent = "Please enter your email address.";
        } else {
            message.textContent = "Thank you!";
            emailInput.value = "";
        }
    });
});