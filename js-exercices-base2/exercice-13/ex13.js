var calculIMC = function(){
	var poids = Number(prompt("Quel-est votre poids en kilos?"));
	var taille = Number(prompt("Quel-est votre taille en m?"));
	var imc = Number(poids/(taille*taille));

	if (imc < 16.5){
		alert(" Votre IMC est de "+imc.toFixed(2)+" :dénutrition ou famine");
	}
	else if( imc < 18.5){
		alert(" Votre IMC est de "+imc.toFixed(2)+" :maigreur");
	}
	else if (imc < 25 ) {
	alert(" Votre IMC est de "+imc.toFixed(2)+" :corpulence normale");
	}
	else if (imc < 30) {
			alert(" Votre IMC est de "+imc.toFixed(2)+" :surpoids");
	}
	else if (imc < 35) {
	alert(" Votre IMC est de "+imc.toFixed(2)+" :obésité modérée");
	}
	else if (imc < 40) {
	alert(" Votre IMC est de "+imc.toFixed(2)+" :obésité sévère");
	}
	else if (imc >= 40) {
	alert(" Votre IMC est de "+imc.toFixed(2)+" :obésité morbide");
	}
	else {
		alert("Problème");
	}
}
