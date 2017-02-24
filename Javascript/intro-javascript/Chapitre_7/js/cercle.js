var r = Number(prompt("Entrez votre rayon de cercle afin que je puisse calculer le périmètre et l'aire de celui-ci: "));

circle = {};
circle.rayon = r;

circle.perimeter = function() {
	var p = 2 * Math.PI * this.rayon;

	return p;

}

circle.aire = function() {
	var a = Math.PI * this.rayon * this.rayon;

	return a;
}

console.log("Son périmètre vaut " + circle.perimeter());
console.log("Son aire vaut " + circle.aire());

/* ou autre manière d'écrire

circle = {
	rayon: r;

	circle.perimeter = function() {
		var p = 2 * Math.PI * this.rayon;
		return p;
	}

	circle.aire = function() {
		var a = Math.PI * Math.pow(this.rayon, 2);
		return a;
	}
}

console.log("Son périmètre vaut " + circle.perimeter());
console.log("Son aire vaut " + circle.aire());
*/