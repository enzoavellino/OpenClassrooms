function carre(x) {
	var resultat = x * x;
	console.log("Le carré de " + x + " est " + resultat);
}

var nombre = Number(prompt("Entrez un nombre entre 0 et 10: "));	
carre(nombre);