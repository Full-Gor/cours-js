// //COMPARAISONS

// //assignation (=)

// // '=' est utilisé pour assigner une valeur

// let nb1=123// number
// let nb2="123"// string

// //l'operateur de comparaisons == signifie "egal à" mais permet d'utiloser que les valeurs de deux variables

// console.log(nb1==nb2)// true

// // l'operateur de comparaison === signifie "strictement égale à" 
// // il permet de verifier la valeur et le type

// console.log(nb1===nb2)// false nb1 et nb2 ne sont pas egal car de différent type ( number et string)


// // l'operateur "!=" signifie different de ... en valeur 

// console.log(nb1 != nb2)// false on demande ici si nb1 et nb2 sosnt de differnete valeur


// // l"operateur "!==" signifie strictement different de ... valeur et de type 

// console.log(nb1 !== nb2) // true ici les variables sont effectivement differente


// //exercice 



// // si mon prenom indiqué dans le prompt  est egale a let prenom alors alert disant bonjour sinon alert disant au revoir
let prenom = 'Nassuf';
let nom = prompt('Entrez votre prénom');

if (prenom === nom) {
  Swal.fire({
    title: 'Bien ou bien',
    text: 'C\'est un plaisir de vous voir!',
    icon: 'success',
    background: '#f0f0f0',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
  });
} else {
  Swal.fire({
    title: 'SHEZAD est un NOOB',
    text: 'Essayez encore!',
    icon: 'error',
    background: '#f0f0f0',
    confirmButtonColor: '#d33',
    confirmButtonText: 'Réessayer'
  });
}

