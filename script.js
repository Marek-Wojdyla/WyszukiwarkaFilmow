const inputsearch = document.querySelector(".search");
const li = document.querySelectorAll("li");

const searchEngine = (e) => {
	const enterText = e.target.value.toLowerCase();

	li.forEach((el) => {
		if (el.textContent.toLowerCase().indexOf(enterText) !== -1) {
			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	});
};

inputsearch.addEventListener("keyup", searchEngine);
