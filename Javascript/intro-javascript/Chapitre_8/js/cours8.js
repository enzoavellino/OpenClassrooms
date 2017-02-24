var unObjet = {};
unObjet.a = 2;

// Crée unAutreObjet avec unObjet comme prototype
var unAutreObjet = Object.create(unObjet);
// on délègue la méthode a à l'objet unAutreObjet
// unAutreObjet hérite de la méthode a de l'objet unObjet
console.log(unAutreObjet.a);

// Crée encoreUnAutreObjet avec unAutreObjet comme prototype
var encoreUnAutreObjet = Object.create(unAutreObjet);
// on délègue la méthode a à l'objet encoreUnAutreObjet
// encoreUnAutreObjet hérite de la méthode a de l'objet unAutreObjet elle-même hérité de l'objet unObjet
console.log(encoreUnAutreObjet.a);
