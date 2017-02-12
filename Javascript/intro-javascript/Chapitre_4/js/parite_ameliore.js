var nombre = Number(prompt("Entrez votre nombre pour vérifier sa parité"));
var i=0;

for (var i = nombre; i < nombre + 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else {
        console.log(i + " est impair");
    }
}
