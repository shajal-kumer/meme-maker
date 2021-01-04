// select all class or id
const topLine = document.querySelector(".topline");
const bottomLine = document.querySelector(".bottomline");
const download = document.querySelector(".download");
const selectImage = document.querySelector(".selectimage");
const canvas = document.querySelector(".c");
const fillColor = document.querySelector(".fill-color");
const strokeColor = document.querySelector(".stroke-color");
const fontFamily = document.querySelector(".font-family");
const fontSize = document.querySelector(".font-size");

const context = canvas.getContext("2d");
let image = null;
let topLineText = "";
let bottomLineText = "";
let fillColorValue = "#ffffff";
let strokeColorValue = "#000000";
let fontFamilyValue = "Impact";
let fontSizeValue = "36";

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

	context.font = `${fontSizeValue}px ${fontFamilyValue}`;
	context.fillStyle = fillColorValue;
	context.strokeStyle = strokeColorValue;
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

download.addEventListener("click", downloadMem);

function downloadMem() {
	const img = canvas.toDataURL("image/png");
	download.href = img;
	download.download = "my-image.png";

	topLine.value = "";
	bottomLine.value = "";
}

fillColor.addEventListener("input", (e) => {
	fillColorValue = e.target.value;
	drawMeme(image, topLineText, bottomLineText);
});
strokeColor.addEventListener("input", (e) => {
	strokeColorValue = e.target.value;
	drawMeme(image, topLineText, bottomLineText);
});
fontFamily.addEventListener("change", (e) => {
	fontFamilyValue = e.target.value;
	drawMeme(image, topLineText, bottomLineText);
});
fontSize.addEventListener("change", (e) => {
	fontSizeValue = e.target.value;
	drawMeme(image, topLineText, bottomLineText);
});
