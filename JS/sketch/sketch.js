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
    
    ajouterBoutonCreationListe()
    
    creerFormulaire();
    let listeDeCourses = document.createElement("ul");
    document.body.appendChild(listeDeCourses);

    ajouterPositionSouris();

}


function ajouterBoutonCreationListe() {
    let boutonAjouterListe = document.createElement("button");
    boutonAjouterListe.textContent = "Modifier liste"
    boutonAjouterListe.classList.add("ajout-liste")

    boutonAjouterListe.onclick = function (evenement) {
        evenement.target.classList.add("hidden-content");
        document.querySelector("form").classList.remove("hidden-content");
    };

    document.body.appendChild(boutonAjouterListe);
}

function creerFormulaire() {
    let formulaire = document.createElement("form");
    formulaire.setAttribute("action", "#");
    formulaire.setAttribute("method", "post");
    formulaire.classList.add("hidden-content");

    let divArticle = document.createElement("div");

    let labelArticle = document.createElement("label");
    labelArticle.setAttribute("for", "nom-article");
    labelArticle.textContent = "Nom de votre article : ";

    let inputArticle = document.createElement("input");
    inputArticle.setAttribute("id", "nom-article");
    inputArticle.setAttribute("name", "nom-article");
    inputArticle.setAttribute("type", "text");
    inputArticle.setAttribute("pattern", "[A-Za-z]+");
    inputArticle.setAttribute("required", "required");


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
        // inputArticle.checkValidity();
        if (inputArticle.checkValidity()) {
            let article = inputArticle.value.toLowerCase();
            console.log(article);
            let quantite = parseInt(inputQuantite.value);
            if (isNaN(quantite)) {
                quantite = 1;
            }

            let existe = articleExiste(article);
            if (existe != null) {
                quantite = mAJArticle(existe, quantite);
            } else {
            
                let nouvelArticle = document.createElement("li");
                nouvelArticle.textContent = `${quantite} ${article}`
                nouvelArticle.addEventListener("click", (event) => changerImportance(event));
                document.querySelector("ul").appendChild(nouvelArticle);
            }
            
            
        } else {
            alert("Votre article ne peut être vide, contenir de espaces ou contenir des caractères spéciaux");
        }
    });

    let boutonAnnuler = document.createElement("button");
    boutonAnnuler.setAttribute("type", "button");
    boutonAnnuler.setAttribute("value", "Terminer");
    boutonAnnuler.textContent = "Terminer";
    boutonAnnuler.addEventListener("click", function(evenement) {
        evenement.stopPropagation();
        evenement.preventDefault();

        document.querySelector(".ajout-liste").classList.remove("hidden-content");
        document.querySelector("form").classList.add("hidden-content");

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



function mAJArticle(element, quantite) {
    let tabQuantiteEtArticle = element.textContent.split(" ");
    tabQuantiteEtArticle[0] = parseInt(tabQuantiteEtArticle[0]) + quantite;
    element.textContent = tabQuantiteEtArticle.join(" ");
}


function ajouterPositionSouris() {
    let position = document.createElement("p");
    document.body.appendChild(position);
    document.body.addEventListener("mousemove", function(event) {
        position.textContent = `position x : ${event.pageX}     position y : ${event.pageY}`;
        let width = window.document.body.clientWidth;
        let alpha = (event.pageX / width * 0.7) + 0.1;
        let height = document.body.clientHeight;
        let red = parseInt(event.pageY / height * 255);
        let blue = parseInt((event.pageY / height * 50) + 50 );
        let green = parseInt((150 - ((event.pageY) / height * 150)) );

        console.log (`r :   ${red}      g : ${green}       b : ${blue}`)
        document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha}`;
    });
}

function changerImportance(evenement) {
    let element = evenement.target;
    if (element.classList.contains("important") ) {
        element.classList.remove("important");
    } else {
        element.classList.add("important");
    }
}

function articleExiste(article) {
    let listeArticles = document.querySelector("ul").children;
    let result;
    for(let liElement of listeArticles){
        let nomArticle = liElement.textContent.split(" ")[1];
        if (nomArticle === article || nomArticle === article+'s' || nomArticle+'s' === article) {
            result = liElement;
        }
    }
    return result;
}