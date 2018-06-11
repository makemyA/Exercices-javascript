var case0= "0. Fin du programme";
var case1= "1. De celsius vers Fahrenheit";
var case2= "2. De Celsius vers Kelvin";
var case3= "3. De Fahrenheit vers Celsius";
var case4= "4. De Fahrenheit vers Kelvin";
var case5= "5. De Kelvin vers Celsius";
var case6= "6. De Kelvin vers Fahrenheit";
var menu = null;

afficherMenu= function (){
	menu = document.getElementById("menu").innerHTML= "<p>"+case0+"</p><p>"+case1+"</p><p>"+case2+"</p><p>"+case3+"</p><p>"+case4+"</p><p>"+case5+"</p><p>"+case6+"</p>";
}


var conversionTemperature = function() {

var choix = Number(prompt("Entrez le numéro du menu souhaité"));





var temp= 0;
switch (parseInt(choix)) {
	

	case 0: break;
	case 1: var celFar = Number(temp*9/5+32);
			var temp1 = Number(prompt("Entrez la température (c°) souhaitée :"));
			 resultat= alert("résultat : "+temp1+" ° Celcius = "+celFar+" ° Fahrenheit" );
			break;
	case 2:  var celKel= Number(temp+273.15); 
			var temp2 = Number(prompt("Entrez la température (c°) souhaitée :"));
			 resultat= alert("résultat : "+temp2+" ° Celcius = "+celKel+" ° Kelvin" );
			break;
	case 3:  var farCel= Number((temp-32)/(9/5));
			temp = Number(prompt("Entrez la température (°F) souhaitée :"));
			 resultat= alert("résultat = "+temp+" ° Fahrenheit = "+farCel+" ° Celcius" );
			break;
	case 4: var farKel= Number((temp-32)*(5/9)+273.15);
			temp = Number(prompt("Entrez la température (°F) souhaitée :"));
			 resultat= alert("résultat = "+temp+" ° Fahrenheit = "+farKel+" ° Kelvin" );
			break;
	case 5:  var kelCel= Number(temp-273.15);
			temp = Number(prompt("Entrez la température (°K) souhaitée :"));
			 resultat= alert("résultat = "+temp+" ° Kelvin = "+kelCel+" ° Celcius" );
			break;
	case 6:  var kelFar= Number((temp*9/5)-459.67);
			temp = Number(prompt("Entrez la température (°K) souhaitée :"));
			 resultat= alert("résultat = "+temp+" ° Kelvin = "+kelFar+" ° Fahrenheit" );
			break;
	default: alert ("Veuillez entrer un numéro valide");
			 conversionTemperature();
			 break; 
	       
}

}

/*0 K = -273,15 °C = -459,67 °F
283,15 K = 10 °C = 50 °F
273,15 K = 0 °C = 32 °F
373,15 K = 100 °C = 212 °F
233,15 K = -40 °C = -40 °F*/