/*-----------
* LES BOUCLES
*-------------
*/


//une boucle permet d'exécuter un bloc de de code plusieurs fois, tant que la condition est vrai 
// mes boucles sont utilisé pour parcourir des tableaux repeter des actions et automatiser des taches

//boucle WHILE  (tant que )
// cette boucle est tres utilisé quand on ne connait pas le nombre de tours de boucles a l'avance

let j=1;
while(j<=10){
    //tant que j est inférieur ou égale à 10

    document.write("<h1 style='color:red' > je passe par ici"+j+"</h1>")
    j++
    document.write("<h2 style='color:blue' > je passe par ici"+j+"</h2>")
}

let maxAge=25
let age=NaN// initialisation avec une valeur invalide "not a number"
console.log( typeof age)
// comme age est NaN alors la boucle commence automatiquement
while(isNaN(age)){
// la boucle continue tant que age n'est pas un nombre
    age=Number(prompt("indiquez votre age"))//convertit la valeur string en number
 
    if(isNaN(age)){
 
        alert("erreur : veuillez ecrire un nombre ")
    }
}
 
console.log(age)
 
if(age <maxAge){
    alert("bonne nuit")
}else{
    alert("bienvenue ")
}

//la BOUCLE FOR
// for a besoin de 3 arguments

for(let i=1;i<=10;i++){
    document.write("<h3 style='color:red'> je passe par là :"+ i +" "</h3>")
}

// parcourir un tableau

let fruits=["pomme","banane","cerise"]

const obj ={
    age:26,
    adresse:"4 rue machin"
}

console.log(fruits[0])

for(let i=0; 1<fruits.length;i++){

    console.log("fruits :, fruits[i]")
}
