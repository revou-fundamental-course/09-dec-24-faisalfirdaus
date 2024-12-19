// Form Validation
const form = document.querySelector(".form");
const username = document.getElementById("username");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    if(usernameValue === "") {
        alert("Tolong isi kolom nama!");
        e.preventDefault();
    }

    if(emailValue === "") {
        alert("Tolong isi kolom email!");
        e.preventDefault();
    }
})
