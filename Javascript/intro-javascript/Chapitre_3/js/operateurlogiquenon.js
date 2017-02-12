var nombre = Number(prompt("Entrez votre nombre: "));

if (!(nombre >100)) {
  console.log(nombre + " est inférieur ou égal à 100");
}

// table de vérité de l'opérateur non
console.log(!true); // affiche false
console.log(!false); // affiche true
