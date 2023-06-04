const tip = Array.from(document.querySelectorAll(".has-tooltip"));
let activeTip = null;
let tipElement = document.createElement("div");
tip.forEach(element => {

		element.addEventListener("click", event => {

			let elementPosition = element.getBoundingClientRect();

			if (tipElement.textContent === element.title){
				tipElement.classList.remove("tooltip_active");
				tipElement.innerHTML = "";
			} else {
				tipElement.className = "tooltip";
				tipElement.innerHTML = element.title;
				tipElement.style.left = `${elementPosition.left + 10}px`
				tipElement.style.top = `${elementPosition.top + 22}px`

				document.body.appendChild(tipElement);
				tipElement.classList.add("tooltip_active")
			}

			event.preventDefault();
		})
	}

)