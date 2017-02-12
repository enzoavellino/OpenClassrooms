function direBonjour() {
	var message = "Bonjour \n";
	return message;

	// la variable message n'est définie que dans l'espace local de la fonction
}

console.log(direBonjour());
// si on tente ici d'appeler la variable message définie dans la fonction précédente il y aura une erreur
//console.log(message);