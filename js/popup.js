var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var closepop = document.querySelector(".modal-close");

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});

closepop.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});
