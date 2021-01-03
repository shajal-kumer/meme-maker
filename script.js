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

function drawMeme(image, topLine, bottomLine) {
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.font = "32px Impact";
	context.fillStyle = "white";
	context.strokeStyle = "black";
	context.lineWidth = 3;
	context.textAlign = "center";

	if (image !== null) {
		context.drawImage(image, 0, 0, canvas.width, canvas.height);
	}

	if (topLine !== null) {
		context.fillText(topLine, canvas.width / 2, 60);
		context.strokeText(topLine, canvas.width / 2, 60);
	}
	if (bottomLine !== null) {
		context.fillText(bottomLine, canvas.width / 2, canvas.height - 60);
		context.strokeText(bottomLine, canvas.width / 2, canvas.height - 60);
	}
}
