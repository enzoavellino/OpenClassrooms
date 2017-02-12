var nombre1 = Number(prompt("Entrez votre premier nombre: "));
var nombre2 = Number(prompt("Entrez votre second nombre: "));

// impossible d'utiliser un switch quand il y a deux variables ou plus

if (nombre1 < nombre2) {
    console.log(nombre1 + " est plus petit que " + nombre2);
} else if (nombre1 > nombre2) {
    console.log(nombre1 + " est plus grand que " + nombre2);
} else {
    console.log(nombre1 + " et " + nombre2 + " sont égaux");
}
