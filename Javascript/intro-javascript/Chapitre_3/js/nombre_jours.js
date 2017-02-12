var mois = Number(prompt("Entrez votre numéro de mois"));

switch (mois) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 12:
    console.log("Il y a 31 jours dans ce mois");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Il y a 30 jours dans ce mois");
    break;
  case 2:
    console.log("Il y a 28 ou 29 jours dans ce mois");
    break;
  default:
    console.log("Vous n'avez pas entré le numéro d'un mois")
}
