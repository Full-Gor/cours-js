/*----------LES BOUCLES----------*/
 
// Une boucle permet d'exécuter un bloc de code plusieurs fois, tant que la condition est vraie
 
 
// Les boucles sont utilisé pour parcourir des tableaux, repéter des actions et autoriser des tâches
 
 
// Boucle WHILE (tant que)
// Cette boucle est très utilisé quand on ne connait pas le nombre de tours de boucles à l'avance
 
 
// let j=1;
// while(j<=10){
//     // Tant que "j" est inférieur ou égale à 10
 
//     document.write("<h1 style='color:red'> je passe par ici"+j+"</h1>");
//     j++;
//     document.write("<h2 style='color:blue'> je passe par ici"+j+"</h2>");
// }
 
 
let maxAge=25
let age=NaN // Initialisationavec une valeur invalide "not a number"
console.log(typeof age)
 
while(isNaN(age)){
   
    age=Number(prompt("Indiquez votre âge"))
 
    if(isNaN(age)){
 
        alert("Erreur : veuillez écrire un nombre")
    }
}
 
console.log(age)
 
if(age <maxAge){
    alert("Bonne nuit")
}else{
    alert("Bienvenue")
}
 
 
// La boucle "for"
// "for" a besoin de 3 arguments
 
// for( let i=1; i<=10; i++){
//     document.write("<h3 style='color:red'> je passe par là : "+ i +" </h3>")
// }
 
// Parcourir un tableau
 
let fruits=["pomme","banane","cerise"]
console.log( fruits)
console.log(fruits[2])
 
for(let i=0; i<fruits.length;i++){
    console.log("fruits :", fruits[i])
}
 
const products=[
    {name:"smartphone", price: 500},
    {name:"ordinateur", price: 800},
    {name:"casque", price: 100},
]
 
let html=""; // On initialise une variable vide
 
for(let i=0; i<products.length;i++){
 
    // A chaque itération on ajoute ()
 
    html += `<div class="product">
 
    <h3> ${products[i].name} </h3>
    <p> prix : ${products[i].price} € </p>
 
    </div>`
}
 
let productList=document.getElementById("product-list")
productList.innerHTML=html