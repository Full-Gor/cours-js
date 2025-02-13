// Concaténer ces variables et afficher dans le dom le résultat
 
         // let n1="nous"
        //  let n2="sommes"
        //  let n3="mercredi"
        //  let n4="12"

//  const resultat = n1 + " " + n2 + " " +  n3 + " " +   n4;
//  document.write(resultat);
 
// Afficher un prompt qui demande l'âge, si l'âge est inférieur à 18 créer une alerte de refus
// et si lâge est supérieur à 18 une alerte d'acceptation
 
        //  let age = prompt("quel est ton age ?")
        //  let MaxAge = 18
        //  if(age<=MaxAge){
        //      alert('trop jeune');
        //  }else{
        //      alert('bienvenue');

        //  }



// Créer une boucle pour afficher 3 fois une phrase dans le dom


        // for( let i=1; i<=3; i++){
        //     document.write("<h3> je suis affiché 3 fois </h3>")
       // }
 
    // creation de fonction réutilisable qui prend comme paramètre "message". cette fonction crée une boucle while pour verifier si la valeur du  prompt est un nombre
function demanderNombre(message){
    let valeur
 
    while(isNaN(valeur)){
        valeur=Number(prompt(message))
 
        if(isNaN(valeur)){
 
            alert("erreur : veuillez entrer un nombre valide")
 
        }
 
 
    }
 
 
// si cette valeur n'est pas un nombre la boucle while continue jusqu'à ce qu'un nombre valide soit saisi
    return valeur // une fois un nombre valide return valeur renvoie cette valeur à l'endroit ou la fonction est appeler
    // Sans return, la fonction ne renverrait rien (undefined).
}
 
 
// ----------------------autre exo
 
// j'appelle la fonction ici en y ajoutant une chaine de caractère qui remplassera le paramètre de la fonction
 
let p3 = demanderNombre("Entrez un nombre");
 
let p4 = demanderNombre("Entrez votre deuxième nombre");
 
let resultat = p3 + p4;
 
document.write("<p>Le résultat des deux prompts est : " + resultat + " </p>");
 
 
 
 
 
//-------------- autre exo
 
let moin13ans=13
let moin17ans=17
let plus18ans=18
// let agePourCine=demanderNombre("quel est votre age pour entrer dans notre cinéma?")/
 
let agePourCine=Number(prompt("donnez votre age pour savoir si vous entrez dans le cinema"))
 
if(agePourCine<moin13ans){
    console.log("acces refuser")
}else if(agePourCine > moin13ans && agePourCine <= moin17ans){
    console.log("accès autoriser avec accompagnant")
}
else{
    console.log("accès autoriser")
}