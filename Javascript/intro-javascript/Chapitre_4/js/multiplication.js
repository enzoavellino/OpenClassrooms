var nombre = Number(prompt("Entrez votre nombre pour voir s'afficher la table de multiplication de celui-ci"));
var i=0;

/*while (i <= 10) {
  console.log(nombre + " * " + i + " est égal à " + nombre * i);
  i++;
}*/

while (i <= 10) {
  var resultat = nombre * i;
  console.log(nombre + " * " + i + " est égal à " + resultat);
  i++;
}

// les deux codes fonctionnent; dans le deuxième code, on stocke le résultat de nombre * i dans une variable résultat
