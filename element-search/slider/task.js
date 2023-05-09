const slideNext = document.querySelector('.slider__arrow_next');
const slidePrevious = document.querySelector('.slider__arrow_prev');
const slideFrame = Array.from(document.querySelectorAll('.slider__item')); 


function next() {
    let slideIndex = slideFrame.findIndex(element => element.classList.contains('slider__item_active'));
    slideFrame[slideIndex].classList.remove('slider__item_active');

    if (slideIndex < slideFrame.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    };
    return slideFrame[slideIndex].classList.add('slider__item_active');
};

function prev() {
    let slideIndex = slideFrame.findIndex(element => element.classList.contains('slider__item_active'));
    slideFrame[slideIndex].classList.remove('slider__item_active');

    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = slideFrame.length - 1;
    };
    return slideFrame[slideIndex].classList.add('slider__item_active');
};


slideNext.addEventListener('click', next);
slidePrevious.addEventListener('click', prev);
