let getHole = (index) => document.getElementById(`hole${index}`); 
const winStatus = document.getElementById('dead');
const loseStatus = document.getElementById('lost');
function clear() {
    winStatus.textContent = 0; 
    loseStatus.textContent = 0;
};
for (let i = 1; i < 10; i++){
    getHole(i).onclick = () => {
        value = +winStatus.textContent;
        lost = +loseStatus.textContent;
    if (getHole(i).classList.contains('hole_has-mole') && value < 9) { 
        winStatus.textContent = value +1; 
    } else if (getHole(i).classList.contains('hole_has-mole') && value === 10) {
        alert ("Вы поймали кротов!");
        clear();
    } else if (lost < 4) {
        
        loseStatus.textContent = lost + 1;
    } else {
        alert ("Кроты убежали!");
        clear();
    }
};
}
