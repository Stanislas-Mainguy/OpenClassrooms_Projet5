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
const img = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tagline");

// création flèche avec eventListener //
allArrow.forEach(function(arrow) {
	arrow.addEventListener('click', function() {
		actualSlidePosition = actualSlidePosition + parseInt(this.dataset.direction);
		if (actualSlidePosition < 0) {
			actualSlidePosition = slides.length -1;
		}
		if (actualSlidePosition > slides.length -1) {
			actualSlidePosition = 0;
		}
	})
})
// faire des points //
let newDot = document.createElement("span");
newDot.classList.add("dot");
newDot.classList.add("dot_selected");
dots.appendChild(newDot);

for (let i = 1; i < slides.length; i++) {
	let newDot = document.createElement("span");
	newDot.classList.add("dot");
	dots.appendChild(newDot);
}
// Mettre le point selectionné //

// changer d'image au clic //

//changer le point actif au clic //

// changer le texte au clic //

// faire une boucle infini pour le clic //