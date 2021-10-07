// let paragraphe = document.getElementById("coucou");
// console.log("contenu textuel de l'élément : " + paragraphe.textContent);
// console.log(paragraphe.innerHTML);

// paragraphe.innerHTML = "<strong>Ceci est une modification </strong>de contenue HTML";

// let divisions = document.getElementsByTagName("div");

// console.log(divisions);
// console.log(divisions[2]);

// let divDodo = document.getElementsByClassName("dodo")[0];
// // divDodo.textContent = "Changement du dodo";

// let selectionCSSTitreH2 = document.querySelector(".dodo h2");
// selectionCSSTitreH2.textContent = "Nouveau Titre DODO"

// console.log("div dodo " + selectionCSSTitreH2);
// console.log("le parent du titre h2 :" + selectionCSSTitreH2.parentElement);
// console.log("le frère/la soeur du titre h2 :" + selectionCSSTitreH2.nextElementSibling);
// console.log("les enfants du parent du titre h2 :" + selectionCSSTitreH2.parentElement.children);

// selectionCSSTitreH2.nextElementSibling.textContent = "je suis le/la frère/soeur"
// selectionCSSTitreH2.parentElement.innerHTML = selectionCSSTitreH2.nextElementSibling.innerHTML 
// + "<div> nouvelle div </div>"; 

// let tab = [1,2,3,4,5,6,7];

// for(let i=0; i < tab.length ; i++){
//     let newElement = document.createElement("p");
//     newElement.innerHTML = i;
//     document.body.appendChild(newElement);

// }
let nouveauFooter = document.createElement('footer')
document.body.appendChild(nouveauFooter);

let paragraphe = document.createElement("p");
paragraphe.textContent = "le footer est ici";
nouveauFooter.appendChild(paragraphe) ;

let secondparagraphe = document.createElement("p");
secondparagraphe.textContent = "second paragraphe";

paragraphe.parentElement.appendChild(secondparagraphe);

let classDodo = document.getElementsByClassName("dodo");

for (let i = 0 ; i < classDodo.length ; i++) {
    let lien = document.createElement("a");
    lien.href = "#";
    lien.text = "UN LIEN";

    classDodo[i].parentElement.appendChild(lien);
}

let dodoDiv = document.querySelector("div.dodo");
let enfantsDodoDiv = dodoDiv.children;


// for(let i = 0 ; i < enfantsDodoDiv.length ; i++) {
//     enfantsDodoDiv[i].textContent = "NOUVEAU CONTENU";
// }

for(let element of enfantsDodoDiv) {
    element.textContent = "NOUVEAU CONTENU";
}

let monLien = document.getElementsByTagName("a")[1];
monLien.onclick = nettoyerPage;

function nettoyerPage() {
    let contenu = document.body.innerHTML;
    document.body.innerHTML = "";


    let bouton = document.createElement("button");
    bouton.textContent = "afficher page"
    bouton.addEventListener("click", function () {
        document.body.innerHTML = contenu;
    });
    // bouton.addEventListener("click", function () {
    //     document.body.style.backgroundColor = "rgba(100,100,100,0.5)";
    // });
    document.body.appendChild(bouton);
}

let tonLien = dodoDiv.querySelector("a");
tonLien.textContent = "Mon super lien trop stylé";
tonLien.addEventListener("click", monSuperLien );

function monSuperLien(){
    document.body.style.color = "rgb(133,25,58)";
}