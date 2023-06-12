const form = document.getElementById("signin__form");
const welcomeBlock = document.querySelector(".welcome");
const userId = document.getElementById("user_id");
const signinStatus = document.getElementById("signin");
const signoutButton = document.getElementById("signout__btn")

function showWelcome () {
    signinStatus.classList.remove("signin_active");
    welcomeBlock.classList.add("welcome_active");
    userId.textContent = localStorage.loginId;
}

window.onload = () => {
    if (localStorage.loginId) {
        showWelcome();
    }
}

form.addEventListener("submit", event => {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
        xhr.open("POST","https://students.netoservices.ru/nestjs-backend/auth");
        xhr.responseType = "json";
        xhr.send(formData);
        xhr.addEventListener("load", e => {
            let loadResponse = xhr.response;
            if (loadResponse.success){
                userId.textContent = loadResponse.user_id;
                localStorage.loginId = loadResponse.user_id;
                showWelcome();
            } else {
                alert("Неверный логин/пароль");
                form.reset();
            }
        })

        event.preventDefault();
    })


signoutButton.addEventListener("click", event => {
    signinStatus.classList.add("signin_active");
    welcomeBlock.classList.remove("welcome_active");
    userId.textContent = "";
    form.reset();

    event.preventDefault();
})