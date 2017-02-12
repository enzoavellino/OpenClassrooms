// périmètre d'un cercle: 2 * pi * r
// aire d'un cercle: pi * r * r

function CalculPerimetreAire(r, choix) {
	function perimetre(r) {
		var resultat = 2 * Math.PI * r;
		console.log("Le périmètre d'un cercle de rayon " + r + " vaut: " + resultat);
	}

	function aire(r) {
		var resultat = Math.PI * r * r;
		console.log("L'aire d'un cercle de rayon " + r + " vaut: " + resultat);
	}

	switch (choix) {
		case "périmètre":
			perimetre(r);
			break;
		case "aire":
			aire(r);
			break;
		default:
			console.log("Entrez périmètre ou aire");
	}
}


var rayonSaisi = Number(prompt("Entrez le rayon de votre cercle: "));
var choixSaisi = prompt("Voulez-vous calculer un périmètre ou une aire ? Entrez votre choix: ");

CalculPerimetreAire(rayonSaisi, choixSaisi);
