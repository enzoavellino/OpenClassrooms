var phrase = prompt("Jouons au ni oui ni non");

while ((phrase !== "Oui") && (phrase !== "Non")) {
  phrase = prompt("Jouons au ni oui ni non");
  console.log(phrase);
}

console.log("Vous avez perdu");
