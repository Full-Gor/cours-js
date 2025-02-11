

/*----------------------
----LA CONCATENATION----
---------------------*/

// le terme concaténation désigne l'action de mettre 
//bout a bout au moins deux chaines de caractères.

let annee=2024,semaine=8,mois=23;
 let number=12;
let year,month,week;
year=2025;
month="02";
week="lundi";

console.log("const number :", "number")

console.log("type de const number :","typeof number")
// addition de deux number

const resultat= number + mois;
// mais si il y a un number puis un string les deux variable sont cote a cote
const resultat02= year + month;
console.log("resultat de year et month :", "resultat02");

console.log("resultat");
console.log("typeof resultat02");// resultat02 est un string

const lundi="lundi";
const suiteDePhrase="est une journée"
const magnifique="magnifique"

const resultat_phrase= lundi + " "  +suiteDePhrase + " "+ magnifique

console.log("resltat_phrase")    

document.write("<h1>" + resultat_phrase + "</h1>")
console.log("le resultat de la phrase :", resultat_phrase)
//contaténez ces 4 variables dans une nouvelle variable et affichez cette nouvelle variable dans un console log

const partie1="Nous sommes le"//string
const partie2=10// integer
const partie3="du mois de"//string
const partie4="fevrier"//string

const resultat1= partie1 + " "  +partie3 + " " +partie2 + " " +partie4 ;
console.log("resultat");

document.write("<h1>" + resultat1 + "</h1>");
console.log( resultat);







