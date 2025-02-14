/**************************************
 * LES FUNCTIONS
 ********************************
 */

 //Une fonction en Javascript est un bloc de code réutilisable qui execute une tache spécifique

 //Elle peut recevpor des paramètre, effectuer des opérations et retourner un resultat un resultat

//  // on peut declarer une fonction en utilisant les mot clé "function"

//  function direBonjour(){
//     console.log("bonjour")
//  }

//  //ici direBonjour est une fonction que affiche bonjour dans la console 
//  // pour executé cette function on doit l'appeler, ne pas ounlier les parentheses

//  direBonjour()//affiche "bonjour dans la console"

//  function console(message){

//     console.log(message)
//  }

//  consol("j'écris mon message")

//  let b=12

//  consol(typeof b)

//  let c=3
//  let d=4

//  function fois2(n){
// return n*2

//  }

//  console.log( fois2(c) )
//  console.log( fois2(d) )
//  console( fois2(d) )

//  // ecrire une fonction reutilisable avec paramètre qui ecris un texte dans le dom avec write()

//  let text = "je suis le texte"
//  let text2= "je usis le 2eme texte"

 // Exercice 1 : Somme de deux nombres
// Écrire une fonction somme(a, b) qui prend deux nombres en paramètres et retourne leur somme.
 
// Écrire une fonction max(a, b) qui retourne le plus grand des deux nombres donnés.
 
 
// Exercice 2 : Vérifier si un nombre est positif, négatif ou nul
// Écrire une fonction verifierNombre(n) qui prend un nombre en paramètre et affiche s'il est positif, négatif ou nul.
 
 
 
// Exercice 3 : Vérifier si un nombre est pair ou impair
// Écrire une fonction pairOuImpair(n) qui retourne "Pair" si n est un nombre pair, sinon "Impair".
 
//  function pairOuImpair(n){
//    if (n % 2 === 0){
//       return "pair";
//    }else{
//       return "Impair";
//    }
//    }   
//    console.log(pairOuImpair(98)); 


// Exercice 4 : Comparer deux nombres
// Écrire une fonction comparer(a, b) qui prend deux nombres et affiche :
 
// "a est plus grand" si a > b
// "b est plus grand" si b > a
// "Les deux sont égaux" si a === b
 
 
// Exercice 5 : Compter le nombre de voyelles dans une chaîne
// Écrire une fonction compterVoyelles(chaine) qui compte le nombre de voyelles (a, e, i, o, u, y) dans une chaîne de caractères.
 
 
// Exercice 6 : Calculatrice simple
// Écrire une fonction calculer(a, b, operateur) qui prend deux nombres et un opérateur (+, -, *, /) et retourne le résultat.
 function calculer (a,b,operateur){

switch(operateur){
   case "+":
      return a+b
      case"-":
      return a-b
      case"*":
      return a*b

      case "/" :
         if(b !== 0){
            return a /b
         }else{
            return "erreur : division par zero impossible"
         }
         case "/" :

         //aperateur conditionnel(ternaire) pour simplifier le if et le else 
         //condition ? si vrai : si faux
         //si b !==0 alors( ? ) division sinon ( : ) 'erreur...
         return b!==0 ? a / b : "erreur : division par zero impossible"

      default:
         return "operateur invalide"
   }
}
console.log(calculer(10,5,"+"));
console.log(calculer(10,5,"-"));
console.log(calculer(10,5,"*"));
console.log(calculer(10,5,"/"));
console.log(calculer(10,5,"/"));


 
 
 
// Exercice 7 : Deviner un animal
// Écrire une fonction animalCri(animal) qui prend un nom d'animal ("chien", "chat", "vache", "oiseau") et retourne le son qu'il fait.