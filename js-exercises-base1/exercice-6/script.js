/*var add = function (a, b) {
    return a + b;
}
"a" et "b" sont les arguments de la fonction, et la valeur qu'elle renvoie est signifiee par le mot cle return. Le mot­cle return arrête egalement l'execution du code dans la fonction. Apres le return, rien ne sera execute.

var result = add(1, 2); 
-> result est egal a 3

Cet appel ajoute les arguments 1 et 2, qui a l'interieur de la fonction add, seront enregistrees dans les variables a et b .*/
var number1 = prompt("Veuillez-indiquer un premier nombre avec 2 chiffres après la virgule:");
var number2 = prompt("Veuillez-indiquer un deuxième nombre entier");
var totalNumber = number1%number2;
alert("Le reste de la division de vos nombre vaut: "+totalNumber);
