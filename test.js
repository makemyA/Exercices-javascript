let a = "Bonjour, je suis une variable générale";

var fonction1= function() {
    let a= "Bonjour je suis une variable dans une fonction"
    console.log(a);
} 

var fonction2 = function() {
    console.log(a);
}
fonction1();
console.log(a);
fonction2();