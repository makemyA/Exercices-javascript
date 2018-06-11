var tab = [-2, 1, 4];
var soustrait = function(x) {
	if (x>=0) {
		return x-2;
	}
	else {
		return "Nombre négatif";
	}
}
var affiche = function(){
	alert(soustrait(tab[0]));
	alert(soustrait(tab[2]));
}
