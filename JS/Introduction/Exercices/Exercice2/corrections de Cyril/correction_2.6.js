// 6) Écrire un algorithme qui calcule la factorielle d'un nombre. (demander à Paul
//     l'explication de la factorielle si besoin)

let num = parseInt(prompt("choose your number to factorize"));


//-----------------WHILE LOOP-----------------------

// function factorialize(_num) {
//     let result = num;
//     if (num === 0 || num === 1) 
//       return 1; 
//     while (num > 1) { 
//       num--;
//       result *= num;
//     }
//     return result;
//   }
//   alert(factorialize(num));

//--------------FOR LOOP----------------------------

function factorialize(_num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
    }
   alert(factorialize(num));

   // ---------------WITH RECURSION---------------------

// function factorialize(num) {
//     if (num < 0) 
//         return alert("DATA ERROR");
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }
//   document.write(factorialize(num));

