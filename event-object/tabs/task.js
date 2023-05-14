let tabMain = Array.from(document.getElementsByClassName('tab'));
let tabContent = Array.from(document.getElementsByClassName('tab__content'));

tabMain.forEach((element,index) => element.addEventListener("click", function(event) {
    tabMain.forEach(item => item.classList.remove('tab_active'));
    tabContent.forEach(item => item.classList.remove('tab__content_active'));

    element.classList.add('tab_active');
    tabContent[index].classList.add('tab__content_active');

    event.preventDefault();
}))

