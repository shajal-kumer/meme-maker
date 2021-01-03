// select all class or id
const topLine = document.querySelector(".topline");
const bottomLine = document.querySelector(".bottomline");
const download = document.querySelector(".download");
const selectImage = document.querySelector(".selectimage");
const canvas = document.querySelector(".c");
const context = canvas.getContext("2d");
let image = null;
let topLineText = "";
let bottomLineText = "";

// 1st process the selected image
selectImage.addEventListener("change", (e) => {
	const reader = new FileReader();
	const file = e.target.files[0];
	reader.readAsDataURL(file);
	reader.onload = function (e) {
		const data = e.target.result;

		image = new Image();
		image.src = data;
		image.onload = function () {
			drawMeme(this, null, null);
		};
	};
});

topLine.addEventListener("input", (e) => {
	topLineText = e.target.value;
	drawMeme(image, topLineText, bottomLineText);
});

bottomLine.addEventListener("input", (e) => {
	bottomLineText = e.target.value;
	drawMeme(image, topLineText, bottomLineText);
});
