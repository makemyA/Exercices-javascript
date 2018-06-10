


var calcul = function(a,b) {
var a = 0;
var b = 2;
 a=b++;
 var operation1 = document.getElementById("operation1").innerHTML = "a=b++";
 var resultat1 = document.getElementById("resultat1").innerHTML = "la variable a vaut "+a+"\nla variable b vaut "+b;
 b=2;a=++b;
 var operation2 = document.getElementById("operation2").innerHTML = "b=2;a=++b;";
 var resultat2 = document.getElementById("resultat2").innerHTML = "la variable a vaut "+a+"\nla variable b vaut "+b;
b=2;a=b--;
var operation3 = document.getElementById("operation3").innerHTML = "b=2;a=b--;";
 var resultat3 = document.getElementById("resultat3").innerHTML = "la variable a vaut "+a+"\nla variable b vaut "+b;
 b=2;a=--b;
 var operation4 = document.getElementById("operation4").innerHTML = "b=2;a=--b;";
 var resultat4 = document.getElementById("resultat4").innerHTML = "la variable a vaut "+a+"\nla variable b vaut "+b;
b=2;a+=b++;
 var operation5 = document.getElementById("operation5").innerHTML = "b=2;a+=b++;";
 var resultat5 = document.getElementById("resultat5").innerHTML = "la variable a vaut "+a+"\nla variable b vaut "+b;
 b=2;a=1; a+=++b;
 var operation6 = document.getElementById("operation6").innerHTML = "b=2;a=1; a+=++b;";
 var resultat6 = document.getElementById("resultat6").innerHTML = "la variable a vaut "+a+"\nla variable b vaut "+b;
b=2;a=1; a-=b++;
 var operation7 = document.getElementById("operation7").innerHTML = "b=2;a=1; a-=b++;";
 var resultat7 = document.getElementById("resultat7").innerHTML = "la variable a vaut "+a+"\nla variable b vaut "+b;
 b=2;a=1; a-=++b;
 var operation8 = document.getElementById("operation8").innerHTML = "b=2;a=1; a-=++b;";
 var resultat8 = document.getElementById("resultat8").innerHTML = "la variable a vaut "+a+"\nla variable b vaut "+b;
b=2;a=1; a+=b--;
 var operation9 = document.getElementById("operation9").innerHTML = "b=2;a=1; a+=b--;";
 var resultat9 = document.getElementById("resultat9").innerHTML = "la variable a vaut "+a+"\nla variable b vaut "+b;
b=2;a=1; a+=--b;
 var operation10 = document.getElementById("operation10").innerHTML = "b=2;a=1; a+=--b;";
 var resultat10 = document.getElementById("resultat10").innerHTML = "la variable a vaut "+a+"\nla variable b vaut "+b;

}




