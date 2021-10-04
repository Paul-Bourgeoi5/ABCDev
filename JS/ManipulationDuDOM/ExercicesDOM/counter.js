//Vous n'êtes pas obligés de comprendre la class compteur
class Compteur {
    constructor(début, delaiEnMilisecondes) {
        this.compte = début;
        this.spanElement = document.createElement("span");

        setInterval(() => {
            this.compte++;
            this.spanElement.textContent = this.compte;
        }, delaiEnMilisecondes);
    }
}



let span = document.querySelector("body div");

let compteSeconde = new Compteur(0, 1000);

span.parentElement.replaceChild(compteSeconde.spanElement, span);


