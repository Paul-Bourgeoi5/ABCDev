/* Les tableaux (Arrays) sont des listes ordonnées de valeurs.
Cela signifie que les chaque élément occupe la place à laquelle il a été défini dans le tableau.*/

/* UTILISEZ F12 sur votre navigateur (ou l'outil de développement tout simplement) pour voir la console sur laquelle j'affiche des résultatts */

//Déclarations de tableau :
let tableauVide = new Array();  //utilise l'appel à la classe Array
let tableauAussiVide = [];
let tableauAvecValeurs = [23, "hello world", true, false, 121546.48];



/* La place de chaque valeur d'un tableau est indiquée par un indice.
La première valeur du tableau est à l'indice 0, la seconde à l'indice 1, la 3ème à l'indice 2
Et la dernière valeur est à l'indice équivalent à la taille de votre tableau -1 */

const premiereValeurDuTableau = tableauAvecValeurs[0];   //tableauAvecValeurs[0] renvoie la valeur du tableau à l'indice 0;

/* une fois le tableau instancier, il faut bien comprendre que 
la notation nomDuTableau[x] n'ajoute pas la valeur x au tableau mais 
fait référence à la valeur stockée dans le tbleau à l'indice x*/

const derniereValeurDuTableau = tableauAvecValeurs[tableauAvecValeurs.length -1];

//monTableau.length renvoie la taille de monTableau. 
//Donc monTableau[monTableau.length -1] renvoie la dernière valeur stockée dans monTableau


//On peut utiliser des boucle for pour parcourir un tableau :
for (let i = 0; i < tableauAvecValeurs.length ; i++){
    console.log(`La valeur ${tableauAvecValeurs[i]} est stockée à l'incide ${i} de tableauAvecValeur`);
}

// Pour parcourir un tableau sans utiliser une variable incrémentée, on peut utiliser for ... of
for (let uneValeurDuTableau of tableauAvecValeurs) {
    console.log(`For...of valeur : ${uneValeurDuTableau} `);
}


//Changer une valeur d'un tableau se fait assez facilement :
tableauAvecValeurs[0] = "Première valeur du tableau";
console.log(`Changement d'une valeur du tableau : ${tableauAvecValeurs}`);


/*  monTableau.push(maValeur) ajoute maValeur à la fin du tableau
    monTableau.unshift(maValeur) ajoute maValeur au début du tableau en décalant l'indice des autres valeurs de 1 */

let tableau = [1, 2, 3, 4, false];
tableau.push("je suis la nouvelle valeur de fin du tableau");
tableau.unshift("je suis la nouvelle première valeur du tableau");

console.log(tableau);

/*  De même, on peut enlever la dernière valeur d'un tableau avec monTableau.pop()
    ou utiliser monTableau.shift() pour enlever la première valeur du tableau*/
console.log ("J'enlève la dernière valeur (" + tableau.pop() + ") du tableau [" + tableau + "]");
console.log ("J'enlève la première valeur (" + tableau.shift() + ") du tableau [" + tableau + "]");


// Il est possible de mettre les valeurs d'un tableau dans une chaine de caractères avec une séparation spécifiée :
let chaineDeCharacteres = tableau.join(" /\/ MASEPARATION \/\ ");
console.log(chaineDeCharacteres);

// De même, on peut créer un tableau à travers une chaine de caractères en spécifiant la séparation qui nous intéresse:
let nouveauTableau = chaineDeCharacteres.split(" /\/ MASEPARATION \/\ ");
console.log(nouveauTableau);

// On peut par exemple récupérer toutes les lettres d'un mot dans un tableau :
let lettresSeparees = "Carapaces".split("");
console.log(lettresSeparees);