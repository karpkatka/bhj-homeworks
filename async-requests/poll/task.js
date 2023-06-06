const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

xhr.addEventListener("readystatechange", () => {
	if (xhr.readyState === xhr.DONE) {
		pollTitle.textContent = JSON.parse(xhr.response).data.title;
		let answersArray = Array.from(JSON.parse(xhr.response).data.answers);
		let pollId = Number(JSON.parse(xhr.response).id);

		answersArray.forEach(item => {
			pollAnswers.innerHTML += `
            <button class="poll__answer">
            ${item}
          </button>
            `
		})

		const answerButton = Array.from(document.querySelectorAll(".poll__answer"));
		answerButton.forEach((item, index) => {
			item.addEventListener("click", event => {
				event.preventDefault();
				alert("Спасибо, ваш голос засчитан!");

				const xhrResult = new XMLHttpRequest();
				xhrResult.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
				xhrResult.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhrResult.send(`vote=${pollId}&answer=${index-1}`);
				xhrResult.addEventListener("readystatechange", () => {
					if (xhrResult.readyState === xhrResult.DONE) {

						let pollResults = Array.from(JSON.parse(xhrResult.response).stat);
						//console.log(pollResults);
						pollAnswers.innerHTML = "";
						pollResults.forEach(item => {
							pollAnswers.innerHTML += `
                    <div class="poll__answer-result">
                    ${item.answer}: ${item.votes}
                  </div>
                    `
						})
					}
				})
			});
		})

	}
})