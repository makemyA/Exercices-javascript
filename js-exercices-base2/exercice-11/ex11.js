var calculMoyenne = function(){
	/*var nombre = Number(prompt("Veuillez entrer un nombre entier"));
	var entier = Number.isInteger(nombre);*/
	var tableau = [];
	var nombre = Number(prompt("Veuillez entrer un nombre entier"));
	var entier = Number.isInteger(nombre);
  
	for ( var i = 0; nombre>=0; i++) {
    if (entier === false) {
      while (entier === false) {
	 alert("Entrée non valide");
  nombre = Number(prompt("Veuillez entrer un nombre entier"));
	entier = Number.isInteger(nombre);
      }
    }
    else {
    tableau.push(nombre);
	alert("Le "+tableau[i]+" a bien été enregistré à l'index "+i+" du tableau.\nCelui-ci comporte "+tableau.length+" Elements.");
	alert (tableau.toString());
	 nombre = Number(prompt("Veuillez entrer un nombre entier"));
	entier = Number.isInteger(nombre);
    }
}

 if (nombre < 0) {
	var somme = 0;
	tableau.push(nombre);
	for (i=0; i<tableau.length; i++){
	somme = somme + tableau[i];	
}
	var moyenne= somme/tableau.length;
	var moyenneAlert = alert("Vous avez entré "+tableau.length+" chiffres.\nLeur moyenne vaut: "+moyenne);
	
}
else {
	calculMoyenne();
}
}

/*autres méthodes; 
essayer avec boucle while à la place de la boucle for
*/
