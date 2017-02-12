function carre(x) {
	var resultat = x * x;
	console.log("Le carré de " + x + " est: " + resultat);
}

for (i = 0; i <= 10; i++) {
	var nombre = Number(prompt("Entrez un nombre quelconque: "));
	carre(nombre);
}