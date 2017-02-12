var nombre = Number(prompt("Entrez un nombre: "));

if (nombre > 0) {
  console.log(nombre + " est positif")
}
else {
  if (nombre < 0 ) {
    console.log(nombre + " est négatif")
  }
  else {
    console.log(nombre + " est nul")
  }
}
