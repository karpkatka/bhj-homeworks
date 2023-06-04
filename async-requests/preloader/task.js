const loader = document.getElementById("loader");
const items = document.getElementById("items");

const xhr = new XMLHttpRequest();
xhr.open("GET","https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();

xhr.addEventListener("readystatechange", () => {    
    if (xhr.readyState === xhr.DONE)
    loader.classlist.remove("loader_active");
    
    currencyData = JSON.parse(xhr.response).response.Valute;

    for (let key in currencyData) {
        items.innerHTML += `<div class ="item"><div class="item__code"> ${currencyData[key].CharCode}
    </div>
    <div class="item__value">${currencyData[key].Value}
    </div>
    <div class="item__currency">руб.
    </div>
    </div>`
    }
})

//loader.classlist.add/remove("loader_active")