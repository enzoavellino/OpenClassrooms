var nombre1 = Number(prompt("Entrez votre premier nombre: "));
var nombre2 = Number(prompt("Entrez votre second nombre"));

switch (nombre1, nombre2) {
  case (nombre1 < nombre2):
    console.log(nombre1 + " est inférieur à " + nombre2);
    break;
  case (nombre2 < nombre1):
    console.log(nombre2 + " est inférieur à " + nombre1);
    break;
  default:
    console.log(nombre1 + " est égal à " + nombre2);
}
