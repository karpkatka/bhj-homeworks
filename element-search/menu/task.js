const menuLinks = Array.from(document.querySelectorAll('.menu__link'));
const menuActive = Array.from(document.querySelectorAll('.menu_active'));


menuLinks.forEach(item => item.addEventListener("click", function(event) {
        if (item.closest('.menu__item').querySelector('.menu_sub')) {
            const menuSub = Array.from(item.parentElement.getElementsByClassName('menu_sub'));
            menuSub.forEach(elem => elem.classList.toggle('menu_active'));
            event.preventDefault();
        }; 
    })); 


// alternative: 
/*menuLinks.forEach(item => {
    item.onclick = (() => {
    if (item.closest('.menu__item').querySelector('.menu_sub')) {
        const menuSub = Array.from(item.parentElement.getElementsByClassName('menu_sub'));
        menuSub.forEach(item => item.classList.toggle('menu_active'));
        return false;
    }})
}); */
