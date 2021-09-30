/* Exercice 2 1 
En fonction de l'âge, afficher si la personne est majeur ou non*/

// const age = Number(prompt("Quel est votre âge ?"));
//  if (age < 18) {
//     console.log(`A ${age} an vous êtes mineur`);
// } else {
    
//     console.log(`A ${age} an vous êtes majeur`);
// }


/* Exercice 2 2
demander 3 mots/noms à l'utilisateur et préciser s'ils sont dans l'ordre alphabétique */

// const mot1 = prompt("Entrez un mot");
// const mot2 = prompt("Entrez un mot");
// const mot3 = prompt("Entrez un mot");

// if (mot1 <= mot2 && mot2 <= mot3) {
//     document.write("les mots sont dans l'ordre alphabétique");
// } else {
//     document.write("les mots ne sont pas dans l'ordre alphabétique");}


/* Exercice 2 3
Demander une heure à un utilisateur et faire avancer l'heure d'une seconde. Vérifier la validité des données saisies */

// const heureComplete = prompt("Donnez une heure en heure:minute:seconde").split(":");

// let heure = parseInt(heureComplete[0]);
// let minute = parseInt(heureComplete[1]);
// let seconde = parseInt(heureComplete[2]);

// if(isNaN(heure) || isNaN(minute) || isNaN(seconde)) {
//     console.log("Entrez des nombres !!");
// } else if(heure < 0 || heure > 23 || minute < 0 || minute > 59 || seconde < 0 || seconde > 59){
//     console.log("Entrez des valeurs possibles");
// } else {
//  console.log(`${heure}:${minute}:${seconde}`);
//     if(seconde < 59) {
//         seconde++;
//     } else {
//         seconde = 0;
//         if(minute < 59) {
//             minute++;
//         } else {
//             minute = 0;
//             if (heure < 23) {
//                 heure++;
//             } else {
//                 heure = 0;
//             }
//         }
//     }
//     console.log(`Nouvelle heure : ${heure}:${minute}:${seconde}`);
// }

/* Exercice 2 4
Demander un nombre compris entre 1900 et 2021 jusqu'à ce que la réponse convienne */

// let annee;

// do {
//     annee = parseInt(prompt("Entrez une année valide entre 1900 et 2021"));
// } while(isNaN(annee) || annee < 1900 || annee > 2021)
// console.log('merci');


/* Exercice 2 5
Écrire un jeu qui fasse deviner un nombre */

// const nombreAleatoire = Math.floor(Math.random() * 100);
// let suggestion;
// let fail = true;
// do {
//     suggestion = parseInt(prompt("Devinez un nombre entre 0 et 100"));
//     if(isNaN(suggestion)) {
//         alert("entrez un nombre !!")
//     } else if (nombreAleatoire === suggestion) {
//         console.log(`Félicitations !! Vous avez trouvé le nombre ${nombreAleatoire}`);
//         fail = false;
//     } else if (nombreAleatoire < suggestion) {
//         console.log(`le nombre à deviner est inférieur à ${suggestion}`);
//     } else {
//         console.log(`le nombre à deviner est supérieur à ${suggestion}`);
//     }
// }while(fail)

/* Exercice 2 5 
Écrire un algo qui calcule la factorielle d'un nombre entier positif */
// const entier = parseInt(prompt("Choississez un entier :"));
// let result = 1;
// if (entier < 0 || isNaN(entier)) {
//     result = NaN;
//     alert("Entrez un entier supérieur ou égal à 0");
// } else if(entier > 1){
//     for (let i = 2 ; i <= entier ; i++) {
//         result *= i;
//     }
// }

// console.log(`Factorielle de ${entier} = ${result}`);