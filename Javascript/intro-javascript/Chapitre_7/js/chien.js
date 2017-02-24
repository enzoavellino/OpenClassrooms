chien = {};

chien.nom = "Crockdur";
chien.race = "Mâtin de Naples";
chien.taille = "75 cm";

chien.decrire = function() {
	var description = this.nom + " a pour race " + this.race + " et pour taille: " + this.taille;

	return description;
};

chien.aboie = function() {
	var aboiement = "Grr ! Grr !";

	return aboiement;
};

chien.reaction = function() {
	var reaction = "Tiens, un chat ! " + this.name + " aboie: " + chien.aboie();

	return reaction;
}

console.log(chien.decrire());
//console.log("Tiens, un chat ! " + chien.nom + " aboie: " + chien.aboie());
console.log(chien.reaction());