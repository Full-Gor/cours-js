// /*-----------------
// LES CONDITIONS----
// ----------------*/

// // En javascript une condition permet d'executer un bloc de code seulement si certaines conditions son vrai (true)

// // structure avec "if"
// nb1=51
// if(nb1 < 50){
//     // si la condition dans les parenthèses est vrai alors le code à l' interieur des accolades s'éxécute
//     alert("je suis inferieur a 50")
// }
// if(true){
//     //si condition est vrai
//     //le code s'éxécute
// }else{
//     //si la condition est fausse
//     // c'est ce code qui s'éxécute
// }
//     // exemple

//     let nb2=49
//     if( nb2 < 50){// si la condition est vrai ici si nb2 est inferieur ou egal à 50 alors le code s'éxécute
//         alert("nb2 est inferieur a 50")
//     }else if{//sinon, si la condition est "fausse", c'est ce code que s' execute
//         alert("nb2 est superieur a 50")
//     }

//EXERCICE

//On va uitiliser les conditions pour verifier l"age d'un user

// si il a plus de 25 ans alors on lui souhaite bienvenue dans la console

// sinon vous lui dite au revoir dans la console



 let maxAge=25

 let age= Number(prompt('quel est ton age ?'))
console.log(typeof age)


// if(age >= 25){
//     alert('bienvenue')
// }
// else if(age < 25){
// console.log('degage')
// }

// pseudo-code : if age <= maxAge { code }else {code}

if(age<=maxAge){
    console.log("au revoir")
}else{
    console.log("au revoir")
}


if(isNaN(age)){// si age n'est pas un numlber alors le code s'execute
    alert("erreur : données invalides ecriver un numéro")
}else if(age <= maxAge){// si age est un nombre mais est unférieur à 25 alors ce code s"execute
    alert("rentre chez toi")
}else{// si toutes les conditions au dessus sont fausses alors ce code s'execute
        alert("bienvenue")
    }

