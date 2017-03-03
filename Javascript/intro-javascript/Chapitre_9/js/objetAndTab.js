var Film = {
	// intialise le film
	init: function(titre, annee) {
		this.titre = titre;
		this.annee = annee;
	},

	// renvoie la description du film
	decrire: function() {
		var description = this.titre + " (" + this.annee + ")";

		return description;
	}
};

var film1 = Object.create(Film);
film1.init("Usual Suspects", 1995);

var film2 = Object.create(Film);
film2.init("The Matrix", 1999);

var film3 = Object.create(Film);
film3.init("Lord Of War", 2005);

// création du tableau
var films = [];

films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function(film) {
	console.log(film.decrire());
});
