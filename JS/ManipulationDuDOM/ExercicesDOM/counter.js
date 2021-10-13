//Vous n'êtes pas obligés de comprendre toute la classe compteur
class Compteur {
    constructor(début, delaiEnMilisecondes, elementHTML) {
        this.compte = début;
        this.elementHTML = elementHTML;

        setInterval(() => {
            this.compte++;
            this.elementHTML.textContent = this.compte;
        }, delaiEnMilisecondes);
    }
}



let span = document.querySelector("body div");

/*Un compteur prend 3 paramètre d'entrée : 
début : nombre auquel le compteur commence
delaiEnMilisecondes : l'intervalle de temps entre chaque incrémentation du compteur
elementHTML : élément HTML dans lequel le compteur est affiché
 */
let compteSeconde = new Compteur(0, 1000, span);

