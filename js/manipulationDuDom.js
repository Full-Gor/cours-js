// /*---------------MANIPULATION DU DOME-------------------*/

// // 1. Selectionne des elements


// const titre=document.getElementById('titre')//selectionner un ID
// const paragraphe=document.getElementById('p')// slectionner une balise
// const elementClass=document.getElementById('ma-classe')//selectionne la premiere class quil teouve avec ce nom

// const premierParagraphe=document.querySelector("p")// selectionne le 1er paragraphe
// const unId=document.querySelector("#monId")//selectionne id
// const allParagraphe=document.querySelector("p")// selectionne tous les paragraphe
// const toutesLesClass=document.querySelector(".maClasse")// selectionne toutes les class ma-class

// // 2 Modification du contenu
// if(titre){
//     titre.textContent="nouveau texte"// change le texte de titre
//     titre.innerHTML="<span>titre</span>"// modifier le HTML on peut ajouter des balises
// }
// // 3modification

// if(titre){
//     titre.style.color="red"
//     titre.style.fontSize="50px"
//     titre.style.padding="10px"
// }

// // 4 gestion de class en css

// titre.classList.add("ajout-de-class")// ajouter une class à un element du DOM
// titre.classList.remove("supprimer-ma-classe")// supprime une class
// titre.classList.toogle("ma-class")//ajoute une class si , ou supprime la class si presente

// // 5 creation et insertion
// const newParagraphe=document.createElement("p")//creation dune balise p
// newParagraphe.textContent="ceci est un paragraphe ajouté par js"
// text.appendChild(newParagraphe)
// newParagraphe.style.color="red"
// newParagraphe.classList.add("ajout-class-js")

// selectionner id text2 dans le fichier html et le mettre dans une variable

// creer un h1 en ajoutant un titre : "titre2" qui sera l'enfant de text2

// ajouter une class a text2 et modifier son css via la balise style dans le fichier css


// let text2 = document.getElementById("text2");

// let h1 = document.createElement("h1");
// h1.innerText = "titre2";
// text2.appendChild(h1);

// text2.classList.add("maClasse");

// // Étape 1 : Sélectionner l'élément avec l'ID `text2` et le mettre dans une variable

// // Étape 2 : Créer un `h1` en ajoutant un titre "titre2" qui sera l'enfant de `text2`
// let h1 = document.createElement("h1");
// h1.innerText = "titre2";
// text2.appendChild(h1);

// // Étape 3 : Ajouter une classe à `text2` et modifier son CSS via le fichier CSS

let clique = document.querySelector(".btn");
        let modale = document.getElementById("modale");
        let fermer = document.getElementById("fermer");

        clique.addEventListener("dblclick", function() {
            clique.style.color = "red";
            modale.style.display = "block";
        });

        fermer.addEventListener("click", function() {
            modale.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target == modale) {
                modale.style.display = "none";
            }
        });