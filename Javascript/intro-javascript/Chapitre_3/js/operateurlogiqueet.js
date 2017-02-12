var nombre = Number(prompt("Entrez votre nombre: "));

if ((nombre >= 0) && (nombre <= 100)) {
  console.log(nombre + " est compris entre 0 et 100");
}

// table de vérité de l'opérateur et
console.log(true && true); // affiche true
console.log(true && false); // affiche false
console.log(false && true); // affiche false
console.log(false && false); // affiche false
