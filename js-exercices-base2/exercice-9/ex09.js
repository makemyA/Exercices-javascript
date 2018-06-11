var testWhile = function(){
	var chaine = prompt("Veuillez saisir une chaine de caractère contenant la lettre 'p'");
	 var contient = chaine.search('p');
	
	while (contient < 0) {
	 chaine = prompt("Veuillez saisir une chaine de caractère contenant la lettre 'p'");
	 contient = chaine.search('p');
}
alert (chaine);
}

