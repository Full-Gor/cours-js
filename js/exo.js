// // Concaténer ces variables et afficher dans le dom le résultat
 
//          // let n1="nous"
//         //  let n2="sommes"
//         //  let n3="mercredi"
//         //  let n4="12"

// //  const resultat = n1 + " " + n2 + " " +  n3 + " " +   n4;
// //  document.write(resultat);
 
// // Afficher un prompt qui demande l'âge, si l'âge est inférieur à 18 créer une alerte de refus
// // et si lâge est supérieur à 18 une alerte d'acceptation
 
//         //  let age = prompt("quel est ton age ?")
//         //  let MaxAge = 18
//         //  if(age<=MaxAge){
//         //      alert('trop jeune');
//         //  }else{
//         //      alert('bienvenue');

//         //  }



// // Créer une boucle pour afficher 3 fois une phrase dans le dom


//         // for( let i=1; i<=3; i++){
//         //     document.write("<h3> je suis affiché 3 fois </h3>")
//        // }
 
//     // creation de fonction réutilisable qui prend comme paramètre "message". cette fonction crée une boucle while pour verifier si la valeur du  prompt est un nombre
// // function demanderNombre(message){
// //     let valeur
 
// //     while(isNaN(valeur)){
// //         valeur=Number(prompt(message))
 
// //         if(isNaN(valeur)){
 
// //             alert("erreur : veuillez entrer un nombre valide")
 
// //         }
 
 
// //     }
 
 
// // // si cette valeur n'est pas un nombre la boucle while continue jusqu'à ce qu'un nombre valide soit saisi
// //     return valeur // une fois un nombre valide return valeur renvoie cette valeur à l'endroit ou la fonction est appeler
// //     // Sans return, la fonction ne renverrait rien (undefined).
// // }
 
 
// // // ----------------------autre exo
 
// // // j'appelle la fonction ici en y ajoutant une chaine de caractère qui remplassera le paramètre de la fonction
 
// // let p3 = demanderNombre("Entrez un nombre");
 
// // let p4 = demanderNombre("Entrez votre deuxième nombre");
 
// // let resultat = p3 + p4;
 
// // document.write("<p>Le résultat des deux prompts est : " + resultat + " </p>");
 
 
 
 
 
// // //-------------- autre exo
 
// // let moin13ans=13
// // let moin17ans=17
// // let plus18ans=18
// // // let agePourCine=demanderNombre("quel est votre age pour entrer dans notre cinéma?")/
 
// // let agePourCine=Number(prompt("donnez votre age pour savoir si vous entrez dans le cinema"))
 
// // if(agePourCine<moin13ans){
// //     console.log("acces refuser")
// // }else if(agePourCine > moin13ans && agePourCine <= moin17ans){
// //     console.log("accès autoriser avec accompagnant")
// // }
// // else{
// //     console.log("accès autoriser")
// // }





 

// // Exercice 1 : Somme de deux nombres
// // Écrire une fonction somme(a, b) qui prend deux nombres en paramètres et retourne leur somme.

// function jer(a,b){
//     return a+b
// }
// document.write(jer(5,6))
 
// // Écrire une fonction max(a, b) qui retourne le plus grand des deux nombres donnés.

// function max(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;df
//     }
// }

// console.log(max(3, 7)); // Affiche 7 
 
// Exercice 2 : Vérifier si un nombre est positif, négatif ou nul

// function verifierNombre(n) {
//     if (n > 0) {
//         return "positif";
//     } else if (n < 0) {
//         return "négatif";
//     } else {
//         return "nul";
//     }
// }
// let prompt()

// // Exemples d'utilisation
// confirm(verifierNombre(5));  "rlgh"
// console.log(verifierNombre(-3)); //  "négatif"
// console.log(verifierNombre(0));// null




let maxAge = 25;  // Déclare une variable maxAge et lui assigne la valeur 25

let age;  // Déclare une variable age sans lui assigner de valeur initiale

while (isNaN(age)) {  // Tant que age n'est pas un nombre, la boucle continue à s'exécuter
    age = Number(prompt("Indiquez votre âge"));  // Demande à l'utilisateur son âge et convertit la réponse en nombre

    if (isNaN(age)) {  // Vérifie si la valeur entrée par l'utilisateur n'est pas un nombre
        alert("Erreur : veuillez écrire un nombre");  // Affiche une alerte si la valeur n'est pas un nombre
    }
}

document.write(age);  // Affiche la valeur de age dans la console

// 2 

// // Écrire une fonction verifierNombre(n) qui prend un nombre en paramètre et affiche s'il est positif, négatif ou nul.
 
 
 
// // Exercice 3 : Vérifier si un nombre est pair ou impair
// // Écrire une fonction pairOuImpair(n) qui retourne "Pair" si n est un nombre pair, sinon "Impair".
 
 
// // Exercice 4 : Comparer deux nombres
// // Écrire une fonction comparer(a, b) qui prend deux nombres et affiche :
 
// // "a est plus grand" si a > b
// // "b est plus grand" si b > a
// // "Les deux sont égaux" si a === b
 
 
// // Exercice 5 : Compter le nombre de voyelles dans une chaîne
// // Écrire une fonction compterVoyelles(chaine) qui compte le nombre de voyelles (a, e, i, o, u, y) dans une chaîne de caractères.
 
 
// // Exercice 6 : Calculatrice simple
// // Écrire une fonction calculer(a, b, operateur) qui prend deux nombres et un opérateur (+, -, *, /) et retourne le résultat.
 
 
 
 
// // Exercice 7 : Deviner un animal
// // Écrire une fonction animalCri(animal) qui prend un nom d'animal ("chien", "chat", "vache", "oiseau") et retourne le son qu'il fait.


// // ***********************EXO 1 
// // let fruits = ["pomme", "banane", "cerise", "orange"];
// // console.log("Tableau initial:", fruits);

// // // ////"kiwi" à la fin du tableau
// // //  function ajouterFin(fruit) {
// // // fruits.push(fruit);
// // //  }
// // //  ajouterFin("kiwi");
// // //   console.log("Après ajout de 'kiwi' à la fin:", fruits);

// // // //"ananas" au début du tableau
// // // function ajouterDebut(fruit) {
// // //     fruits.unshift(fruit);
// // // }
// // //  ajouterDebut("ananas");
// // // console.log("Après ajout de 'ananas' au début:", fruits);

// // // //supprimer le dernier élément du tableau
// // //  function supprimerDernier() {
// // //      fruits.pop();
// // //  }
// // //  supprimerDernier();
// // //  console.log("Après suppression du dernier élément:", fruits);

// // // //afficher la longueur du tableau
// //  function afficherLongueur() {
// // fruits.length();
// // afficherLongueur();
// //     console.log("Longueur du tableau:", fruits.length);
// // }






// //*********************EXO2 */
// // //RECHERCHER DANS UN TABLEAU
// // // Créer le tableau initial
// // let nombres = [10, 25, 45, 38, 50];
// // // console.log("Tableau initial:", nombres);

// // // // Vérifier si le nombre 30 est présent dans le tableau
// //  function verifierPresence(nombre) {
// //      if (nombres.includes(nombre)) {
// //          console.log(nombre + " est présent dans le tableau.");
// //      } else {
// //          console.log(nombre + " n'est pas présent dans le tableau.");
// //      }
// //  }
// //  verifierPresence(30);

// // // Trouve l'index de 45
// //  function trouverIndex(nombre) {
// //      let index = nombres.indexOf(nombre);
// //      console.log("L'index de " + nombre + " est " + index);
// //  }
// //  trouverIndex(45);
// //*********************EXO3 */
// // FILTRER UN TABLEAU


// // // // // // Créer le tableau initial
// //   let nombres = [2, 5, 8, 11, 14, 17];
// // // // // console.log("Tableau initial:", nombres);



// // // // // Créer un nouveau tableau avec des nombres supérieurs à 10
// //   let nombresSuperieursA10 = nombres.filter(function(nombre) {
// //       return nombre > 10;
// //   });
// //   console.log("Nouveau tableau avec des nombres supérieurs à 10:", nombresSuperieursA10);


// // let utilisateurs = [
// //     ["Alice Dupont", "alice@example.com", "admin"],
// //     ["Bob Martin", "bob@example.com", "utilisateur"],
// //     ["Charlie Durand", "charlie@example.com", "moderateur"]
// // ];

// //  // Fonction pour ajouter un utilisateur
// //  function ajouterUtilisateur() {
// //     let nom = document.getElementById("nom").value;
// //     let email = document.getElementById("email").value;
// //     let role = document.getElementById("role").value;

// //     if (nom && email && role) {
// //         // Vérifier si l'email existe déjà
// //         for (let i = 0; i < utilisateurs.length; i++) {
// //             if (utilisateurs[i][1] === email) {
// //                 alert(" Cet email est déjà utilisé !");
// //                 return;
// //             }
// //         }

// //         utilisateurs.push([nom, email, role]);
// //         afficherUtilisateurs();
// //     } else {
// //         alert(" Veuillez remplir tous les champs !");
// //     }
// // }

// // function ajouterUtilisateur() {
// //     let nom = document.getElementById("nom").value;
// //     let email = document.getElementById("email").value;
// //     let role = document.getElementById("role").value;

// //     if (nom && email && role) {
// //         // Vérifier si l'email existe déjà
// //         for (let i = 0; i < utilisateurs.length; i++) {
// //             if (utilisateurs[i][1] === email) {
// //                 alert(" Cet email est déjà utilisé !");
// //                 return;
// //             }
// //         }

// //         utilisateurs.push([nom, email, role]);
// //         afficherUtilisateurs();
// //     } else {
// //         alert(" Veuillez remplir tous les champs !");
// //     }
// // }

// //    // Fonction pour supprimer un utilisateur
// //    function supprimerUtilisateur(index) {
// //     utilisateurs.splice(index,1)
// //      afficherUtilisateurs();
// //  }

// // Déclaration et initialisation du tableau des utilisateurs
// let utilisateurs = [
//     ["Alice Dupont", "alice@example.com", "admin"],
//     ["Bob Martin", "bob@example.com", "utilisateur"],
//     ["Charlie Durand", "charlie@example.com", "moderateur"]
// ];

// // Affichage du tableau des utilisateurs dans la console
// console.log(utilisateurs);

// // Déclaration de la fonction pour ajouter un utilisateur
// function ajouterUnUtilisateur(nom, mail, role) {
//     // Ajout d'un nouvel utilisateur au tableau des utilisateurs
//     utilisateurs.push([nom, mail, role]);
// }

// // Appel de la fonction pour ajouter un nouvel utilisateur
// ajouterUnUtilisateur("jon", "@gmail.com", "admin");
// // Affichage du tableau des utilisateurs après l'ajout
// console.log(utilisateurs);


// // *******************BOUCLE WHILE *********************

// let utilisateurs = [
//     ["Alice Dupont", "alice@example.com", "admin"],
//     ["Bob Martin", "bob@example.com", "utilisateur"],
//     ["Charlie Durand", "charlie@example.com", "moderateur"]
// ];

// // Fonction pour ajouter un utilisateur
// function ajouterUtilisateur(nom, email, role) {
//     // Vérifie que tous les paramètres sont fournis
//     if (nom && email && role) {
//         let i = 0;  // Initialisation de l'index à 0

//         // Utilisation d'une boucle while pour vérifier si l'email existe déjà
//         while (i < utilisateurs.length) {
//             if (utilisateurs[i][1] === email) {  // Si l'email existe déjà
//                 prompt("Cet email est déjà utilisé !");
//                 return;  // Sortir de la fonction pour éviter d'ajouter un utilisateur avec un email dupliqué
//             }
//             i++;  // Incrémenter l'index
//         }
//         // Ajouter l'utilisateur au tableau des utilisateurs
//         utilisateurs.push([nom, email, role]);
      
//     } else {
//         // Afficher un message d'erreur si tous les champs ne sont pas remplis
//         prompt("Veuillez remplir tous les champs !");
//     }
// }
// // *****************BOUCLE FOR ***********************************

// let utilisateurs = [
//     ["Alice Dupont", "alice@example.com", "admin"],
//     ["Bob Martin", "bob@example.com", "utilisateur"],
//     ["Charlie Durand", "charlie@example.com", "moderateur"]
// ];

// // Déclaration d'une boucle for
// // Fonction pour ajouter un utilisateur
// function ajouterUtilisateur(nom, email, role) {
//     // Vérifie que tous les paramètres sont fournis
//     if (nom && email && role) {
//         // Vérifier si l'email existe déjà dans le tableau des utilisateurs
//         for (let i = 0; i < utilisateurs.length; i++) {
//             // Si l'email existe déjà, afficher un message d'erreur
//             if (utilisateurs[i][1] === email) {
//                 prompt("Cet email est déjà utilisé !");
//                 return; // Sortir de la fonction pour éviter d'ajouter un utilisateur avec un email dupliqué
//             }
//         }
//         // Ajouter l'utilisateur au tableau des utilisateurs
//         utilisateurs.push([nom, email, role]);
//         // Appeler une fonction pour afficher la liste des utilisateurs (supposant que cette fonction existe)
//         afficherUtilisateurs();
//     } else {
//         // Afficher un message d'erreur si tous les champs ne sont pas remplis
//         prompt("Veuillez remplir tous les champs !");
//     }
// }

// // // Fonction pour afficher les utilisateurs
// // function afficherUtilisateurs() {
// //     let utilisateurString = utilisateurs.map(user => user.join(", ")).join("\n");
// //     prompt(utilisateurString);
// // }

// // // Fonction pour supprimer un utilisateur
// // function supprimerUtilisateur(index) {
// //     if (index >= 0 && index < utilisateurs.length) {
// //         utilisateurs.splice(index, 1);
// //         afficherUtilisateurs();
// //     } else {
// //         prompt("Index invalide !");
// //     }
// // }

// // // Exemple d'utilisation

// // // Ajouter un utilisateur
// // ajouterUtilisateur("David Lefèvre", "david@example.com", "utilisateur");

// // // Supprimer un utilisateur (par exemple, le deuxième utilisateur, index 1)
// // supprimerUtilisateur(1);


// let utilisateurs = [
//     ["Alice Dupont", "alice@example.com", "admin"],
//     ["Bob Martin", "bob@example.com", "utilisateur"],
//     ["Charlie Durand", "charlie@example.com", "moderateur"]
// ];

// console.lor(utilisateurs)

// function ajouterUnuser(){

//     utilisateurs.pop()

// }
// ajouterUnuser()
// console.log("user",utilisateurs)



// function trouverUtilisateur(nom{
//     let user= utilisateurs[1].includes(mail)
//     console.log("user",user)
//     if(user===true){
//        // return` non : $(utilisateurs[0]}), mail : $(utilisateurs[1])} role : ${utilisateurs[2]}`:/
//        return "nom :" + utilisateurs[0]
//     }else{
//         return "utilisateur"
//     }
// }
