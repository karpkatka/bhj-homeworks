const interestCheck = Array.from(document.querySelectorAll(".interest__check"));

interestCheck.forEach (item => {
    const interestChild = Array.from(item.closest(".interest").querySelectorAll(".interest__check")); 

    item.addEventListener("change", (event) => {
    if (item.checked) {
        interestChild.forEach(element => element.checked = true);
    } else {
        interestChild.forEach(element => element.checked = false);
    }
    });
}
);