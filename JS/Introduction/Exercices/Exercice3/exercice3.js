/* Exercice 3 1
Écrire un algorithme qui indique si un tableau contient une valeur spécifique */
// let notreTableau = ["denis", "arlbrecht", 07, 10, 1986];
// let recherche = prompt("Entrez une valeur à rechercher dans notre tableau");
// let estTrouve = false;

// for(let i = 0 ; i < notreTableau.length ; i++) {
//     if (notreTableau[i] == recherche) {
//         console.log(`La valeur "${recherche}" existe dans notre tableau à la position ${i}`);
//         estTrouve = true;
//     }
// }

// /* Possibilité d'utiliser un for ... of ...*/
// // for(let valeurTableau of notreTableau) {
// //     if (valeurTableau == recherche) {
// //         console.log(`La valeur "${recherche}" existe dans notre tableau`);
// //         estTrouve = true;
// //     }
// // }

// if (!estTrouve) {
//     console.log(`Aucune occurence de "${recherche}" dans notre tableau`);
// }

/* Exercice 3 2
Écrire un algorithme qui détermine si un mot est un palindrome. */
// let userEntry = "";
// let userTab = new Array();
// let isPalindrome = true;

//  userEntry = prompt("Écrivez un mot");
// userTab = userEntry.split("");
// console.table(userTab);

// for(let index = 0, reversedIndex = userTab.length-1 ; index <= reversedIndex ; index++, reversedIndex--) {
//     console.log(`première lettre : ${userTab[index]} ; dernière lettre : ${userTab[reversedIndex]}`);
//     if (userTab[index] !== userTab[reversedIndex]) {
//         isPalindrome = false;
//     }
// }
// if (isPalindrome) {
//     console.log("C'est un palindrome !")
// } else {
//     console.log("Ce n'est pas un palindrome !");
// }

/* autre solution  */
// let result = userEntry === userEntry.split("").reverse().join("");
// console.log(result);


/* Exercice 3 3
Écrire un algorithme qui trouve le plus petit nombre d'une liste (d'un tableau) */

//Mettre 20 entiers aléatoires entre 0 et 100 dans un tableau
// let table = new Array(20).fill(0).map(() => Math.floor(Math.random() *100));
// console.table(tableau);

// let minimum = Infinity;

// for(let value of table) {
//     if (value < minimum) {
//         minimum = value;
//     }
// }
// console.log(`Le minimum de notre tableau est : ${minimum}`);


/* Exercice 3 4
Écrire un algorithme qui trie une liste de nombre par ordre croissant */

//Mettre 20 entiers aléatoires entre 0 et 100 dans un tableau
let tableau = new Array(20).fill(0).map(() => Math.floor(Math.random() *100));
console.table(tableau);

for (let index = 0; index < tableau.length ; index++){
    for (let indexCompare = 0 ; indexCompare < tableau.length - 1 - index ; indexCompare++) {

        if(tableau[indexCompare] > tableau[indexCompare +1]) {
            let tmp = tableau[indexCompare];
            tableau[indexCompare] = tableau[indexCompare +1];
            tableau[indexCompare +1] = tmp;
        }
    }
}

document.write(tableau);
console.table(tableau);