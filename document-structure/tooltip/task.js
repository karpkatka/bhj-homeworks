const tip = Array.from(document.querySelectorAll(".has-tooltip"));
let activeTip = null;

tip.forEach(element => {

		element.addEventListener("click", event => {
			if (activeTip) {
				activeTip.classList.remove("tooltip_active");
				activeTip = null;

			}

			let elementPosition = element.getBoundingClientRect();

			let tipElement = document.createElement("div");
			tipElement.className = "tooltip";
			tipElement.innerHTML = element.title;
			tipElement.style.left = `${elementPosition.left}px`
			tipElement.style.top = `${elementPosition.top}px`

			document.body.appendChild(tipElement);
			tipElement.classList.add("tooltip_active")

			activeTip = tipElement;
			event.preventDefault();
		})
	}

)