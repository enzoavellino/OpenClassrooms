// définition de l'objet chien
var Chien = {
	init: function(nom, race, taille) {
		this.nom = nom;
		this.race = race;
		this.taille = taille;
	}
}

Chien.aboyer = function() {
	if (this.nom === "Crokdur") {
		var aboiement = "Grr Grr !";
	} else {
		var aboiement = "Kai Kai !";
	}
	

	return aboiement;
};

var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cms");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cms");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());
