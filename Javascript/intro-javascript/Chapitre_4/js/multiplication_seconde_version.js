var nombre = Number(prompt("Entrez un nombre entre 2 et 9"));
var i=0;

while ((i <= 10) && ((nombre <= 2) || (nombre <= 9))) {
  var resultat = nombre * i;
  console.log(nombre + " * " + i + " est égal à " + resultat);
  i++;
}
