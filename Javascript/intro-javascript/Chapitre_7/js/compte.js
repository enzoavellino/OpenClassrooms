compte = {};

compte.name = "Alex";
compte.solde = 0;

var choix = Number(prompt("Choisissez 1 pour créditer le compte: " + "\n" + "Choisissez 2 pour débiter le compte: " + "\n" + "Choisissez 3 pour créditer puis débiter le compte: "));

compte.soldeInitial = function() {
	var s = "Titulaire du compte " + this.name + " possède " + this.solde + " sur son compte";

	return s;
}

compte.crediter = function(c) {
	var c = Number(prompt("Choisissez le montant à créditer: "));
	this.solde = this.solde + c;

	return this.solde;
}

compte.debiter = function(d) {
	var d = Number(prompt("Choisissez le montant à débiter: "));
	this.solde = this.solde - d;

	return this.solde;
}

compte.decrire = function() {
	var describe = "Titulaire du compte " + this.name + " possède " + this.solde + " euros sur son compte";

	return describe;
}

switch (choix) {
	case 1:
		console.log(compte.soldeInitial());
		compte.crediter();
		console.log(compte.decrire());
		break;
	case 2:
		console.log(compte.soldeInitial());
		compte.debiter();
		console.log(compte.decrire());
		break;
	case 3:
		console.log(compte.soldeInitial());
		compte.crediter();
		compte.debiter();
		console.log(compte.decrire());	
}
