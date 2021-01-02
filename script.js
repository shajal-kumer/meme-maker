// select all class or id
const topLine = document.querySelector("#topline");
const bottomLine = document.querySelector("#bottomline");
const download = document.querySelector("#download");
const selectImage = document.querySelector("#selectimage");
const canvas = document.querySelector("#c");
const context = canvas.getContext("2d");

// 1st process the selected image
selectImage.addEventListener("change", (e) => {
	const reader = new FileReader();
	const file = e.target.files[0];
    reader.readAsDataURL(file);
    reade
});
