var heures = Number(prompt("Entrez votre heure: "));
var minutes = Number(prompt("Entrez votre nombre de minutes: "));
var secondes = Number(prompt("Entrez votre nombre de secondes: "));

/* console.log("Il est " + heure + " h");
heure += 1;
console.log("Il est " + heure + " h"); */

if ((heures >= 0) && (heures <= 23) && (minutes >=0) && (minutes <= 59) && (secondes >=0) && (secondes <= 59)) {
  secondes++;
  if (secondes === 60) {
    secondes = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      heures++;
      if (heures === 24) {
        heures = 0;
      }
    }
  }
  console.log("Dans une seconde, il sera " + heures + " heures " + minutes + " minutes et " + secondes + " secondes ");
} else {
  console.log("Heures, minutes et secondes incorrectes");
}
