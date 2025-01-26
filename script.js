let submitBtn = document.getElementById("submit")
let form  = document.getElementById("form")

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted successfully! You can now close this page.");
});

// This is the way I thought it would work however it doesn't do anything