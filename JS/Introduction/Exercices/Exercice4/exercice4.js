/*Exercice 4 1
Mettre les algorithmes de tri et de recherche du minimum sous la forme de fonctions et les tester */

// let userArray = [12, 51, 2, 0, 45, 0.2];
// console.log(userArray)
// arrayAscendingBubbleSort(userArray);
// console.table(userArray);
// console.table(searchMinimumInArray(userArray));

// function arrayAscendingBubbleSort(arrayToSort) {
//     let didItChange = false;
//     let temp = 0;
//     for(let index = 0 ; index < arrayToSort.length -1 ; index ++) {
//         if (arrayToSort[index] > arrayToSort[index + 1]) {
//             temp = arrayToSort[index];
//             arrayToSort[index] = arrayToSort[index +1];
//             arrayToSort[index +1] = temp;
//             didItChange = true;
//         }
//     }

//     if(didItChange) {
//         arrayToSort = arrayAscendingBubbleSort(arrayToSort);
//     }
// }

/* solution sans fonction récursive*/
// let tableau = new Array(20).fill(0).map(() => Math.floor(Math.random() *100));
// console.table(tableau);

// sortArray(tableau);

// console.table(tableau);

// function sortArray(userArray) {

//     for (let index = 0; index < userArray.length ; index++){
//         for (let indexCompare = 0 ; indexCompare < userArray.length - 1 - index ; indexCompare++) {

//             if(userArray[indexCompare] > userArray[indexCompare +1]) {
//                 let tmp = userArray[indexCompare];
//                 userArray[indexCompare] = userArray[indexCompare +1];
//                 userArray[indexCompare +1] = tmp;
//             }
//         }
//     }
// }




// function searchMinimumInArray (arrayToSearchIn) {
//     let temp = Infinity;
//     for(let value of arrayToSearchIn) {
//         if (value < temp ) {
//             temp = value;
//         }
//     }

//     return temp;
// }

/*Exercice 4 2
Mettre sous la forme d'une fonction récursive la fonction qui teste les palindromes*/

//Correction de Xavier
// let yolo = prompt("Saisier un mot :");
// //conversion de la chaine de caractères en un tableau
// yolo = yolo.split("");
// palindrome(yolo);

// function palindrome(yolo) {
//     if (yolo.length == 0 || yolo.length == 1) {
//         alert("Bravo /20");
//     }
//     else if (yolo[0] == yolo[yolo.length - 1]){
//         yolo.pop();
//         yolo.push();
//         //appel récursif
//         palindrome(yolo);
//     } else {
//         alert("Nul / 20");
//     }
// }


/*Exercice 4 3
Écrire une fonction récursive qui calcule une factorielle */
// factorielle(8) = 1 * 2 *3 * 4 * 5 * 6 * 7 * 8       factorielle(0) = 1

// console.log("factorielle de 4 = " + factorielle(6));

// function factorielle(nombreEntier){
//     if(nombreEntier === 0) {
//         return 1;
//     } else {
//         return nombreEntier * factorielle(nombreEntier-1);
//     }
// }


/*Exercice 4 4
Écrire une fonction récursive qui calcule la suite de Fibonnacci d'un entier n*/

// console.log(fibonnacci(25));

// function fibonnacci (nombreEntier) {
//     if(nombreEntier === 0) {
//         return 0;
//     } else if (nombreEntier === 1) {
//         return 1;
//     } else {
//         return (fibonnacci(nombreEntier-1) + fibonnacci(nombreEntier -2));
//     }
// }

