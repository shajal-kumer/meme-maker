// selectors
const topLine = document.querySelector(".topline");
const bottomLine = document.querySelector(".bottomline");
const download = document.querySelector(".download");
const selectImage = document.querySelector(".selectimage");
const canvas = document.querySelector(".c");
const fillColor = document.querySelector(".fill-color");
const strokeColor = document.querySelector(".stroke-color");
const fontFamily = document.querySelector(".font-family");
const fontSize = document.querySelector(".font-size");

// Gloval variables
const context = canvas.getContext("2d");
let image = null;
let topLineText = "";
let bottomLineText = "";
let fillColorValue = "#ffffff";
let strokeColorValue = "#000000";
let fontFamilyValue = "Impact";
let fontSizeValue = "36";

// Event Listenners

// 1st process the image and create new image
selectImage.addEventListener("change", (e) => {
	// create a new object for file reader
	const reader = new FileReader();

	// get the file link
	const file = e.target.files[0];

	// read the file
	reader.readAsDataURL(file);

	// after load the file --> create new image
	reader.onload = function (e) {
		const data = e.target.result;

		// create a new object for image
		image = new Image();
		// set the src of image
		image.src = data;

		// after load the image draw the image on canvas
		image.onload = function () {
			// after load image --> draw the image in canvas
			drawMeme(this, null, null);
		};
	};
});

// handle the topline input text
topLine.addEventListener("input", (e) => {
	topLineText = e.target.value;
	drawMeme(image, topLineText, bottomLineText);
});

// handle the bottomine input text
bottomLine.addEventListener("input", (e) => {
	bottomLineText = e.target.value;
	drawMeme(image, topLineText, bottomLineText);
});

// handle the fill color input
fillColor.addEventListener("input", (e) => {
	fillColorValue = e.target.value;
	drawMeme(image, topLineText, bottomLineText);
});
// handle the stroke color input
strokeColor.addEventListener("input", (e) => {
	strokeColorValue = e.target.value;
	drawMeme(image, topLineText, bottomLineText);
});
// handle the font family input
fontFamily.addEventListener("change", (e) => {
	fontFamilyValue = e.target.value;
	drawMeme(image, topLineText, bottomLineText);
});
// handle the font size input
fontSize.addEventListener("change", (e) => {
	fontSizeValue = e.target.value;
	drawMeme(image, topLineText, bottomLineText);
});

// download handler listerner
download.addEventListener("click", downloadMem);

// functions

// draw meme function
function drawMeme(image, topLine, bottomLine) {
	// clear the canvas before drawing
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

function downloadMem() {
	// get the canvas as image data url
	const img = canvas.toDataURL("image/png");
	download.href = img;
	download.download = "my-image.png";

	topLine.value = "";
	bottomLine.value = "";
}
