// renvoie un message de bienvenue
function direBonjour(prenom, nom) {
	var message = "Bonjour, " + prenom + " " + nom + " !";
	return message;
}

// TODO : faire saisir le prénom et le nom de l'utilisateur
var first_name = prompt("Entrez votre prénom: ");
var last_name = prompt("Entrez votre nom: ");

// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat
var resultat = direBonjour(first_name, last_name);
console.log(resultat);