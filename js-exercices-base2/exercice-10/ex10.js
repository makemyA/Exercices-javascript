var somme = function(){
	var chiffre = [0,0,0];


	for (var i = 0; i < 3; i++) {
		 chiffre[i]= parseInt(prompt("Saisissez un chiffre"));
	}
	var addition = chiffre[0]+chiffre[1]+chiffre[2];
	alert ("La somme des chiffres vaut: "+addition);
}