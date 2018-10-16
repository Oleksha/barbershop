var linkmap = document.querySelector(".contacts-button-map");
var popupmap = document.querySelector(".modal-map");
var closemap = popupmap.querySelector(".modal-close");

linkmap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupmap.classList.add("modal-show");
});

closemap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupmap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popupmap.classList.contains("modal-show")) {
			popupmap.classList.remove("modal-show");
		}
	}
});