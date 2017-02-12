function min(x, y) {
	if (x < y) {
		console.log("Le plus petit nombre entre " + x + " et " + y + " est " + x);
	} 
	else if (y < x) {
		console.log("Le plus petit nombre entre " + x + " et " + y + " est " + y);
	}
	else {
		console.log(x + " et " + y + " sont égaux !");
	}
}

var number1 = Number(prompt("Entrez votre premier nombre: "));
var number2 = Number(prompt("Entrez votre deuxième nombre: "));

min(number1, number2);