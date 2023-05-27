const widget = document.querySelector(".chat-widget");

widget.addEventListener("click", (event) => {
    widget.classList.add("chat-widget_active")
});

const chatInput = document.querySelector(".chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");
const clientMessage = document.querySelector(".chat-widget__input");
const botMessages = ['Кто тут', 'У - Уходи', 'Закрыто', 'Напишите на следующей неделе', 'Все на обеде'];
chatInput.addEventListener("keydown", (event) => {
    let date = new Date();
    let currentDate = [date.getHours(), date.getMinutes()];
    if ((clientMessage.value.length > 0) && (event.key === "Enter")) {
        messages.insertAdjacentHTML("beforeend",`<div class="message message_client"><div class="message__time">${currentDate[0] + ':' + currentDate[1]}</div><div class="message__text"> ${clientMessage.value} </div> </div>`);
        clientMessage.value = "";

        messages.insertAdjacentHTML("beforeend",`<div class="message"><div class="message__time">${currentDate[0] + ':' + currentDate[1]}</div><div class="message__text"> ${botMessages[Math.floor(Math.random() * botMessages.length)]} </div> </div>`);

    };
});

