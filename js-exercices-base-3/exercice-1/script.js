

let changeImg = document.getElementById("image1");
changeImg.addEventListener("mouseover", fonctionOver);
changeImg.addEventListener("mouseleave", fonctionOut)


/* function(){

    fonctionOver() });
 */



function fonctionOver() {
/* document.getElementById("image1").innerHTML= "<img src="+"image2.jpg"+" id="+"image2"+" />"; */
    changeImg.src="image2.jpg"; 

    
}
 function fonctionOut() {
    changeImg.src="image1.jpg";
}