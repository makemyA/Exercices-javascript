var pointure = prompt ("Veuillez indiquer votre pointure svp:");
var birthDay = prompt ("Veuillez indiquer votre année de naissance svp:");
var calcul= function(a, b) {
	 return (a*2+5)*50-b+1766;
}
var resultat = calcul(pointure, birthDay);
alert("Le résultat de la fonction est "+resultat);
