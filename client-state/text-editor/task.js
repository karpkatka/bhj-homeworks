const textArea = document.getElementById("editor");
const buttonClear = document.getElementById("clear-button");

function restoreText(key) {
	try {
		return JSON.parse(localStorage.getItem(key))
	} catch {
		return null
	}
};

window.onload = function() {
	textArea.value = restoreText("text");
};

function saveText(key, object) {
	localStorage.setItem(key, JSON.stringify(object))
}

textArea.addEventListener("input", event => {
	saveText("text", textArea.value);
});

buttonClear.addEventListener("click", event => {
	textArea.value = "";
	localStorage.removeItem("text");

	event.preventDefault;
})