const cookie = document.getElementById("cookie");
const clikerCounter = document.getElementById("clicker__counter"); 

cookie.insertAdjacentHTML("beforebegin", "<div class='clicker__status'>Скорость кликов: <span id='clickerSpeed'>0</span></div>");
const clikerSpeed = document.getElementById("clickerSpeed"); 
const timeAll = Date.now();

cookie.onclick = () => {
    const value = +clikerCounter.textContent;

    clikerCounter.textContent = value +1; 
    if (cookie.width === 200) {
        cookie.width = 250; 
    } else {
        cookie.width = 200;
    }
    const timePass = Date.now();
    clikerSpeed.textContent = (value / ((timePass - timeAll) / 1000)).toFixed(2);
}
