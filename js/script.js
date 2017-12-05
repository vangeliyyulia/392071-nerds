
var link = document.querySelector(".btn");
var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".modal-close");

var formName = popup.querySelector("[name=formName]");
var email = popup.querySelector("[name=email]");
var messageBox = popup.querySelector("[name=messageBox]");
var form = popup.querySelector("form");

var storage = localStorage.getItem("email");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
		email.value = storage;
		formName.focus();
	} else {
			email.focus();
		}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!formName.value || !email.value || !messageBox.value) {
	evt.preventDefault();
	popup.classList.remove("modal-error");
	popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("modal-error");
}	else {
		localStorage.setItem("email", email.value);
	}	
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
		}
	}
});
	