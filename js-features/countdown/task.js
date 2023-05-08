 let timer = document.querySelector('#timer');

// head.span.before = ("<span>00</span>");

 const timerId = setInterval(() => {
    const value = +timer.textContent;
    if (value > 0) {
        timer.textContent = value - 1;
    } else {
        clearInterval(timerId); 
        alert("Вы победили в конкурсе!")
    }
 }, 1000);



