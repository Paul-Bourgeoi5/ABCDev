// window.onload = function() {
//     let listeContinue = true;
//     let maListe = document.createElement("ul");
//     maListe.style.backgroundColor = "rgba =(0,0,0, 0.4)";
//     document.body.appendChild(maListe);

//     do{
//         let reponse = prompt("Que voulez-vous ajouter à votre liste de courses ?");
//         console.log(reponse);
//         if (reponse === null || reponse === "" || reponse.toLocaleLowerCase() === "fin"){
//             listeContinue = false;
//         } else {
//             let nouveauBesoin = document.createElement("li");
//             nouveauBesoin.innerHTML = reponse
//             maListe.appendChild(nouveauBesoin);
//         }

//     } while(listeContinue)

//     let fin = document.createElement("h2");
//     if (maListe.children.length === 0){
//         fin.textContent = "Rien à acheter";
//     } else {
//         fin.textContent = "****************FIN DE LA LISTE DE COURSES****************";
//     }

//     document.body.appendChild(fin);
// }


window.onload = function() {
    let listeDeCourses = document.createElement("ul");
    document.body.appendChild(listeDeCourses);
    creerFormulaire();



}


function creerFormulaire() {
    let formulaire = document.createElement("form");
    formulaire.setAttribute("action", "#");
    formulaire.setAttribute("method", "post");

    let divArticle = document.createElement("div");

    let labelArticle = document.createElement("label");
    labelArticle.setAttribute("for", "nom-article");
    labelArticle.textContent = "Nom de votre article : ";

    let inputArticle = document.createElement("input");
    inputArticle.setAttribute("id", "nom-article");
    inputArticle.setAttribute("name", "nom-article");
    inputArticle.setAttribute("type", "text");
    inputArticle.setAttribute("required", "required");
    inputArticle.setAttribute("pattern", "[A-Za-z]+");


    let divQuantite = document.createElement("div");

    let labelQuantite = document.createElement("label");
    labelQuantite.setAttribute("for", "nom-Quantite");
    labelQuantite.textContent = "Quantite a  acheter : ";

    let inputQuantite = document.createElement("input");
    inputQuantite.setAttribute("id", "nom-quantite");
    inputQuantite.setAttribute("name", "nom-quantite");
    inputQuantite.setAttribute("type", "text");

    let boutonAjout = document.createElement("input");
    boutonAjout.setAttribute("type", "submit");
    boutonAjout.setAttribute("value", "Ajouter");
    boutonAjout.addEventListener("click", function(evenement) {
        evenement.stopPropagation();
        evenement.preventDefault();

        let article = inputArticle.value.replace(/\s/g, "").toLowerCase();
        if (article.length > 0) {
            console.log(article);
            let quantite = parseInt(inputQuantite.value);
            if (isNaN(quantite)) {
                quantite = 1;
            }
            quantite = verifierQuantiteArticle(article, quantite);
            article = verifierPluriel(article, quantite);
            
            let nouvelArticle = document.createElement("li");
            nouvelArticle.textContent = `${quantite} ${article}`
            document.querySelector("ul").appendChild(nouvelArticle);
        }
    });

    let boutonAnnuler = document.createElement("button");
    boutonAnnuler.setAttribute("type", "button");
    boutonAnnuler.setAttribute("value", "Terminer");
    boutonAnnuler.textContent = "Terminer";
    boutonAnnuler.addEventListener("click", function(evenement) {
        evenement.stopPropagation();
        evenement.preventDefault();

        document.querySelector("form").setAttribute("hidden", "hidden");

    });

    divArticle.appendChild(labelArticle);
    divArticle.appendChild(inputArticle);
    formulaire.appendChild(divArticle);
    divQuantite.appendChild(labelQuantite);
    divQuantite.appendChild(inputQuantite);
    formulaire.appendChild(divQuantite);
    
    formulaire.appendChild(boutonAjout);
    formulaire.appendChild(boutonAnnuler);

    document.body.appendChild(formulaire);
}



function verifierQuantiteArticle(article, quantite) {
    let liste = document.querySelector("ul");
    for(let li of liste.children) {
        if (li.textContent.includes(article)){
            quantite = quantite + parseInt(li.textContent.split(" ")[0]);
            liste.removeChild(li);
        }
    }
    return quantite;
}

function verifierPluriel(article, quantite) {
    if (quantite > 1) {
        if (!article.match(/\*s/)) {
            article = article + "s";
        }
    }
    return article;
}