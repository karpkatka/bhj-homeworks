
const block = Array.from(document.querySelectorAll(".reveal"));

function blockVisible(element){
    const {top, bottom} = element.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
        element.classList.remove("reveal_active")
    } else {
        element.classList.add("reveal_active")
    }
};

const scrollListener = document.addEventListener("scroll", function(event) {
    block.forEach(item => blockVisible(item));
    event.preventDefault(); 
})

scrollListener(); 