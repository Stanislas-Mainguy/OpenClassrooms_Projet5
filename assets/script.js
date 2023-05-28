const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let actualSlidePosition = 0;
const allArrow = document.querySelectorAll(".arrow");
const dots = document.querySelector(".dots");
const img = document.querySelector("#change_picture");
const tagLine = document.querySelector("#change_tagline");

// Création de dot //
let newDot = document.createElement("span");
newDot.classList.add("dot");
newDot.classList.add("dot_selected");
dots.appendChild(newDot);

for (let i = 1; i < slides.length; i++) {
	let newDot = document.createElement("span");
	newDot.classList.add("dot");
	dots.appendChild(newDot);
}

// création flèche avec eventListener //
allArrow.forEach(function(arrow) {
	arrow.addEventListener('click', function() {
		
		actualSlidePosition = actualSlidePosition + parseInt(this.dataset.direction);
		console.log(actualSlidePosition);
		if (actualSlidePosition < 0) {
			actualSlidePosition = slides.length -1;
		}
		if (actualSlidePosition > slides.length -1) {
			actualSlidePosition = 0;
		}
		changeSlide();
		dots[actualSlidePosition].classList.add("dot_selected");
	})
})

// Changement d'image et de tagline //
function changeSlide() {
	img.src = "./assets/images/slideshow/" + slides[actualSlidePosition].image;
	tagLine.innerHTML = slides[actualSlidePosition].tagLine;
}

// dots[actualSlidePosition].classList.remove("dot_selected"); //