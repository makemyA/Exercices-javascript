/* /* /*3 Manieres de faire des doubles boucles*/
/* boucle for*/



/* let table = [["a1","a2", "a3"],["b1","b2","b3"],["c1","c2","c3"],["d1","d2","d3"]];

for (let i =0 ; i < table.length; i++){
    for (let j = 0; j< table[i].length; j++) {
        table.push("yoooooo");
        console.log(table[i][j]);
    }
} */
/*boucle forEach ! Utilisé que pour parcourir un tableau*/
table.forEach(function(element) {
    element.forEach(function(val) {
        console.log(val);
    })
});
/*boucle Table*/
table.map ((tortue, index)=> {
    tortue.map ((lapin, renard)=>{
        console.log(lapin+ "->"+index+"->"+renard);
    })
})

/*recursivite exemple: test l'entrée d'un utilisateur et renvoie la fonction tant qu'il ne rentre pas qqch rentrant dans les conditions de départ)*/

function alpha() {
    let number = prompt("Entrez un nombre");
    /*let tableau = [];*/
    if(isNaN(number)) {
        alpha();
    }
    else {
        console.log(number);
    }
}
alpha();
