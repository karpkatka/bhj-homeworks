const popup = document.querySelector(".modal");
const popupClose = document.querySelector(".modal__close");



popupClose.addEventListener("click", event => {
    popup.classList.remove("modal_active");
    document.cookie = "popup=closed";
});

window.onload = () => {
    if (!document.cookie.includes("popup=closed")){
        popup.classList.add("modal_active")
    };
}


