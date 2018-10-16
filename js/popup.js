var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var closepop = document.querySelector(".modal-close");
var login	= popup.querySelector("[name=login]");

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	login.focus();
});

closepop.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});
