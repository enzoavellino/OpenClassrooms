/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
alert(solution);
// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
	// je déclare une variable nombre et vais demander à l'utilisateur de tapez un nombre au hasard
	var nombre_saisi = Number(prompt("Devinez le nombre entre 1 et 100 choisi; Entrez votre nombre: "));

	for (controle=1; controle <= 6; controle++) {
		if (nombre_saisi < solution) {
			console.log(nombre_saisi + " est inférieur à la solution à deviner");
			nombre_saisi = Number(prompt("Entrez un nouveau nombre pour deviner la solution"));
			if (controle === 6) {
				console.log("Dommage, vous n'avez pas deviné la solution qui était " + solution);
			}
		}	
		else if (nombre_saisi > solution) {
			console.log(nombre_saisi + " est supérieur à la solution à deviner");
			nombre_saisi = Number(prompt("Entrez un nouveau nombre pour deviner la solution"));
			if (controle === 6) {
				console.log("Dommage, vous n'avez pas deviné la solution qui était " + solution);
			}
		}
		/*else if ((nombre_saisi === solution) || (controle === 1))  {
			console.log(nombre_saisi + " est bien égal à la solution; vous avez gagné !");
			console.log("Vous avez réussi en un essai, bravo !");
		}
		else if ((nombre_saisi === solution) || (controle === 2)) {
			console.log(nombre_saisi + " est bien égal à la solution; vous avez gagné !");
			console.log("Vous avez réussi en deux essais, bravo !");
		}
		else if ((nombre_saisi === solution) || (controle === 3)) {
			console.log(nombre_saisi + " est bien égal à la solution; vous avez gagné !");
			console.log("Vous avez réussi en trois essais, bravo !");
		}
		else if ((nombre_saisi === solution) || (controle === 4)) {
			console.log(nombre_saisi + " est bien égal à la solution; vous avez gagné !");
			console.log("Vous avez réussi en quatre essais, bravo !");
		}
		else if ((nombre_saisi === solution) || (controle === 5)) {
			console.log(nombre_saisi + " est bien égal à la solution; vous avez gagné !");
			console.log("Vous avez réussi en cinq essais, bravo !");
		}
		else if ((nombre_saisi === solution) || (controle === 6)) {
			console.log(nombre_saisi + " est bien égal à la solution; vous avez gagné !");
			console.log("Vous avez réussi en six essais, bravo !");
		}*/
		else {
			console.log("Ceci n'est pas un nombre");
			nombre_saisi = Number(prompt("Entrez un nouveau nombre pour deviner la solution"));
		}
	}
	console.log(nombre_saisi + " est bien égal à la solution; vous avez gagné !");
	console.log("Vous avez réussi en " + controle + " tentatives");

	// attention dans le switch: si vous voulez comparez une condition dans un case
	// assurez-vous de mettre un booléen dans la variable que switch vérifie ( true en l'occurence )
	/*for (controle=1; controle <= 6; controle++) {
		switch(true) {
			case (nombre_saisi < solution):
				console.log(nombre_saisi + " est inférieur à la solution à deviner");
				nombre_saisi = Number(prompt("Entrez un nouveau nombre pour deviner la solution"));
				if (controle === 6) {
					console.log("Dommage, vous n'avez pas deviné la solution qui était " + solution);
				}
				break;
			case (nombre_saisi > solution):
				console.log(nombre_saisi + " est supérieur à la solution à deviner");
				nombre_saisi = Number(prompt("Entrez un nouveau nombre pour deviner la solution"));
				if (controle === 6) {
					console.log("Dommage, vous n'avez pas deviné la solution qui était " + solution);
				}
				break;
			case (nombre_saisi === solution):
				console.log(nombre_saisi + " est bien égal à la solution; vous avez gagné !");
				switch(controle) {
					case 1:
						console.log("Vous avez réussi en un essai, bravo !");
						break;
					case 2:
						console.log("Vous avez réussi en deux essais, bravo !");
						break;
					case 3:
						console.log("Vous avez réussi en trois essais, bravo !");
						break;
					case 4:
						console.log("Vous avez réussi en quatre essais, bravo !");
						break;
					case 5:
						console.log("Vous avez réussi en cinq essais, bravo !");
						break;
					case 6:
						console.log("Vous avez réussi en six essais, bravo !");
						break;
				}
				break;
			default:
				console.log("Ceci n'est pas un nombre");
				nombre_saisi = Number(prompt("Entrez un nouveau nombre pour deviner la solution"));
				break;
		}
	}*/
	
