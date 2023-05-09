const modalWindow = document.getElementById('modal_main');
modalWindow.classList.add('modal_active');
const activeWindows = Array.from(document.getElementsByClassName('modal_active'));
const closeModalElement = Array.from(document.querySelectorAll('.modal__close'));


closeModalElement.forEach(item => {
    item.onclick = (() => {
item.closest('.modal_active').classList.remove('modal_active');
    })
});

const modalSuccess = document.getElementById('modal_success');
const showSuccessElement = document.querySelector('.show-success');

showSuccessElement.onclick = (() => {
   modalWindow.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
})
