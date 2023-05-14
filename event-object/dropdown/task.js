let menuDrop = Array.from(document.querySelectorAll('.dropdown'));
let menuDropList = Array.from(document.querySelectorAll('.dropdown__list'));

menuDrop.forEach((item, index) => item.addEventListener("click", function(event) {
    let i = menuDropList[index];
    i.classList.toggle('dropdown__list_active');
    event.preventDefault();
}));

let menuItem = Array.from(document.querySelectorAll('.dropdown__item'));

menuItem.forEach(item => item.addEventListener("click", function(event){
    let listValue = item.closest('.dropdown').querySelector('.dropdown__value');
    listValue.textContent = item.textContent;
    event.preventDefault();
}))

