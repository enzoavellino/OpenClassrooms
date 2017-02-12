function calculer(x,y) {
	function addition(x,y) {
		var resultat = x + y;
		console.log("L'addition de " + x + " et " + y + " vaut " + resultat);
	}

	function soustraction(x,y) {
		var resultat = x - y;
		console.log("La soustraction de " + x + " et " + y + " vaut " + resultat);
	}

	function multiplication(x,y) {
		var resultat = x * y;
		console.log("La multiplication de " + x + " et " + y + " vaut " + resultat);
	}

	function division(x,y) {
		var resultat = x / y;
		console.log("La division de " + x + " et " + y + " vaut " + resultat);
	}

	addition(x,y);
	soustraction(x,y);
	multiplication(x,y);
	division(x,y);
}

var number1 = Number(prompt("Entrez votre premier nombre: "));
var number2 = Number(prompt("Entrez votre second nombre: "));

calculer(number1, number2);