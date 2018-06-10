var rayon = parseInt(prompt("Calcul de l'air\nVeuillez indiquer la taille du rayon(m):"));

var surfaceRayon=function() {
	var surface = document.getElementById("surface").innerHTML=Number(Math.PI*rayon*rayon).toFixed(2)+" m²";

}	