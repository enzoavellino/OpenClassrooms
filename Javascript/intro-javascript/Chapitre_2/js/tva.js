var prix = prompt("Entrez votre prix hors taxes: ");
console.log("Votre prix hors taxes est de " + prix + " " + "euros");

var prix_ttc = prix * ( 1 + 19.6 /100 );
console.log("Votre prix ttc est de " + prix_ttc + " " + "euros");
