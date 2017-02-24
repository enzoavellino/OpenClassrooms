var character = {};
	
character.name = "Aurora";
character.health = 150;
character.force = 25;
character.xp = 0;

// voici une méthode qui utilise une fonction et renvoie la description du personnage
character.describe = function() {
	var description = this.name + " a " + this.health + " points de vie et " + this.force + " en force et " + this.xp + " en xp";

	return description;
};

// appel de la méthode describe définie plus haut
console.log(character.describe());

// Aurora est blessée par une flèche
character.health = character.health - 20;

// Aurora trouve un bracelet de force
character.force = character.force +10;

// Aurora apprend une nouvelle compétence
character.xp = character.xp + 15;

// appel de la méthode describe une fois les modifications de variables effectuées
console.log(character.describe());

