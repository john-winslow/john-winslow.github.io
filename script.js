console.log("The script is running!");

function addPinkBorder(event) {
	console.log("click happened!")
	console.log(event);
	event.target.style.border = "5px solid pink";
}

var photo = document.getElementsByClassName("hamburger")[0];
photo.addEventListener("click", addPinkBorder);
