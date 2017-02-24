var stylo = {
	type: "bille",
	couleur: "bleu",
	marque: "Bic"
};

console.log("Mon stylo a " + stylo.type + " et a aussi une couleur " + stylo.couleur + " et a enfin une marque: " + stylo.marque);
console.log("Mon stylo a " + stylo["type"] + " et a aussi une couleur " + stylo["couleur"] + " et a enfin une marque: " + stylo["marque"]);