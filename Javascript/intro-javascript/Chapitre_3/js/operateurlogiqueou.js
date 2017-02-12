var nombre = Number(prompt("Entrez votre nombre: "));

if ((nombre < 0) || (nombre > 100)) {
  console.log(nombre + " est en dehors de l'intervalle [0;100]");
}

// table de vérité de l'opérateur ou
console.log(true || true); // affiche true
console.log(true || false); // affiche true
console.log(false || true); // affiche true
console.log(false || false); // affiche false
