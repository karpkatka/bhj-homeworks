const inputField = document.querySelector(".tasks__input");
const tasksList = document.querySelector(".tasks__list");
const buttonAdd = document.querySelector(".tasks__add")

function addTask() {
	if (inputField.value.length > 0) {
		const task = document.createElement(`div`);
		task.classList.add("task");
		task.innerHTML = `<div class="task__title">
      ${inputField.value}
     </div>
     <a href="#" class="task__remove">&times;</a>`;
		tasksList.appendChild(task);

		const taskRemove = task.querySelector(".task__remove");

		taskRemove.addEventListener("click", event => {
			event.target.closest(".task").remove();
			console.log("removed")
		});
	} else {
		alert("Пожалуйста, заполните поле")
	}

};

inputField.addEventListener("keydown", event => {
	if (event.key === "Enter") {
		addTask();
		event.preventDefault();
	}
});

buttonAdd.addEventListener("click", event => {
	addTask();
	event.preventDefault();
});