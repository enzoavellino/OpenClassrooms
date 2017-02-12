function calculer(operande1,operande2,operation) {
	function addition(operande1,operande2) { 
		var resultat = operande1 + operande2;
		console.log("L'addition de " + operande1 + " et " + operande2 + " vaut: " + resultat);
	}

	function soustraction(operande1,operande2) {
		var resultat = operande1 - operande2;
		console.log("La soustraction de " + operande1 + " et " + operande2 + " vaut: " + resultat);
	}	

	function multiplication(operande1,operande2) {
		var resultat = operande1 * operande2;
		console.log("La multiplicatoin de " + operande1 + " et " + operande2 + " vaut: " + resultat);
	}

	function division(operande1,operande2) {
		var resultat = operande1 / operande2;
		console.log("La division de " + operande1 + " et " + operande2 + " vaut: " + resultat);
	}

	switch(operation) {
		case "+":
			addition(operande1,operande2);
			break;
		case "-":
			soustraction(operande1,operande2);
			break;
		case "*":
			multiplication(operande1,operande2);
			break;
		case "/":
			division(operande1,operande2);
			break;
		default:
			console.log("Ceci n'est pas un opérateur !");
	}

}

var numberSaisi1 = Number(prompt("Entrez votre premier nombre: "));
var numberSaisi2 = Number(prompt("Entrez votre second nombre: "));
var operationSaisie = prompt("Entrez l'opération que vous voulez effectuez; au choix: +, -, * ou /");

calculer(numberSaisi1, numberSaisi2, operationSaisie);