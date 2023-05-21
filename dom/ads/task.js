const adsRotary = Array.from(document.querySelectorAll(".rotator__case"));

let caseActive = 0;
let speed = 0; 

const changeRotator = (array) => {
    clearInterval(interval);
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove("rotator__case_active");        
    }
    caseActive++;

    if (caseActive === array.length) {
        caseActive = 0;
    }

    array[caseActive].classList.add("rotator__case_active");
    array[caseActive].style.color = array[caseActive].dataset.color;
    speed = array[caseActive].dataset.speed;
    interval = setInterval(changeRotator, speed, adsRotary); 
}

let interval = setInterval(changeRotator, speed, adsRotary);