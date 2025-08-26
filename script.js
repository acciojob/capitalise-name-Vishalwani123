//your JS code here. If required.
let name = document.querySelector("#fname");

name.addEventListener("blur", () => {
	name.value = name.value.toUpperCase();
});

