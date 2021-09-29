/* Exercice 1 1:
Inverser les valeurs entre 2 variables*/
// let a;
// let b;
// let temporaire;

// a = prompt("Entrez la valeur d'une variable");
// b = false;
// console.log(`a = ${a} et b = ${b}`)
// temporaire = b;
// b = a;
// a = temporaire;

// console.log(`les nouvelles valeurs de a et b sont : a = ${a} et b = ${b}`);


/* Exercice 1 2 :
faire saisir des données à l'utilisateur*/
// const prenom = prompt("Votre prénom");
// const nom = prompt("Votre nom");
// const age = prompt("Votre âge");

// document.write(`nom : ${nom} ; prénom : ${prenom} ; âge : ${age}`);


/* Exercice 1 3
entrer la date de naissance de l'utilisateur et calculer son âge*/
// const dateNaissance = Number(prompt("Entrez votre date de naissance"));
// const anneeActuelle = 2021;

// // console.log(`Votre âge est de  : ${anneeActuelle-dateNaissance} ans`);


// console.log("Votre âge est de  : " + (anneeActuelle - dateNaissance) + " ans");


/*Exercice 1 4 
Écrire un programme qui demande un prix d'article HT, le nombre d'articles et calcule le prix total TTC avec une TVA de 20%*/
// const horsTaxe = Number(prompt("Quel est le prix d'un article ?"));
// const nombreArticles = Number(prompt("Combien d'articles prenez-vous ?"));
// const pourcentageTaxe = 20;
// let totalTTC = (horsTaxe * nombreArticles) * (1 + pourcentageTaxe/100);

// console.log(`Pour ${nombreArticles} articles à ${horsTaxe}€ l'unité, vous paierez un total TTC de : ${totalTTC}€`);

/*Exercice 1 5
Écrire de plusieurs façons différentes une même phrase*/
console.log("Cette phrase est totalement incroyable !");
console.log("Cette phrase" +  "est totalement" + "incroyable !");

const debutPhrase = "Cette phrase ";
const milieuxPhrase = "est totalement";
const finPhrase = " incroyable !";

console.log(`${debutPhrase + milieuxPhrase + finPhrase}`);