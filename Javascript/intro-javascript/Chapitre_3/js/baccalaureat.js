var moyenne = Number(prompt("Entrez votre moyenne: "));

if ( moyenne < 10) {
  console.log("Vous n'êtes pas admis !");
} else if ( moyenne < 12 ) {
    console.log("Vous êtes admis sans mention !");
} else {
    console.log("Vous êtes admis avec mention !");
}
