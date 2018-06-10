
var surfaceRectangle= function() {
	var longueur= parseInt(prompt("Veuillez saisir la largeur (m):")); 
    var largeur= parseInt(prompt("Veuillez saisir la longueur (m):"));
	var surface = document.getElementById("surface").innerHTML = longueur*largeur+" m²";
}

var periRectangle = function() {
	longueur= parseInt(prompt("Veuillez saisir la largeur(m)"));
    largeur= parseInt(prompt("Veuillez saisir la longueur(m):"));
    var perimetre = document.getElementById("perimetre").innerHTML = longueur*2+largeur*2+" m";

}


