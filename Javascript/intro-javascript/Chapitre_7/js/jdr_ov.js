var character = {
	name: "Aurora",
	health: 150,
	force: 25,
	xp: 0
};

character.describe = function() {
	var description = this.name + " a " + this.health + " en points de vie et " + this.force + " en points de force et " + this.xp + " en xp";

	return description;
};

console.log(character.describe());

character.health = character.health - 20;
character.force = character.force + 10;
character.xp = character.xp + 15;

console.log(character.describe());