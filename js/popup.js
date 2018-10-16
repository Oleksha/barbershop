var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var closepop = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login	= popup.querySelector("[name=login]");
var password	= popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem(login);
} catch (err) {
	isStorageSupport = false;
}

form.addEventListener("submit", function (evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
		}
	}
});

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

closepop.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});
