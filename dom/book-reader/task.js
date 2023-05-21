
const books = document.querySelector(".book");
const fontChange = Array.from(document.querySelectorAll(".font-size"));
const colourText = Array.from(document.querySelector(".book__control_color").children);
const colourBackground = Array.from(document.querySelector(".book__control_background").children);

fontChange.forEach(element => element.addEventListener("click", function(event){
    fontChange.forEach(el => {
        el.classList.remove("font-size__active")
    })
    element.classList.add("font-size__active");
    if (element.classList.contains("font-size_small")){
        books.classList.remove("book_fs-big");
        books.classList.add("book_fs-small");
    } else if(element.classList.contains("font-size_big")){
        books.classList.remove("book_fs-small");
        books.classList.add("book_fs-big");
    }
    event.preventDefault();
}))

colourText.forEach(element => element.addEventListener("click", function(event){
    if (element.classList.contains("color")){
    colourText.forEach(el => {
        el.classList.remove("color_active")
    })
    element.classList.add("color_active")
    if (element.classList.contains("text_color_black")){
        books.classList.add("book_color-black")
        books.classList.remove("book_color-gray", "book_color-whitesmoke")
    } else if (element.classList.contains("text_color_gray")){
        books.classList.add("book_color-gray")
        books.classList.remove("book_color-black", "book_color-whitesmoke")
    } else if (element.classList.contains("text_color_whitesmoke")){
        books.classList.add("book_color-whitesmoke")
        books.classList.remove("book_color-black", "book_color-gray")
    }

    event.preventDefault();
}
}))

colourBackground.forEach(element => element.addEventListener("click", function(event){
    if (element.classList.contains("color")){
     colourBackground.forEach(el => {
        el.classList.remove("color_active")
    })
    element.classList.add("color_active")
    if (element.classList.contains("bg_color_black")){
        books.classList.add("book_bg-black")
        books.classList.remove("book_bg-gray", "book_bg-white")
    } else if (element.classList.contains("bg_color_gray")){
        books.classList.add("book_bg-gray")
        books.classList.remove("book_bg-black", "book_bg-white")
    } else if (element.classList.contains("bg_color_white")){
        books.classList.add("book_bg-white")
        books.classList.remove("book_bg-black", "book_bg-gray")
    }

    event.preventDefault();
}
}))