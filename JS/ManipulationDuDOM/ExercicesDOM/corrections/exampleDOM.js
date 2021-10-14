let mainArticleClass = "article-principal";

let mainArticle = document.getElementsByClassName(mainArticleClass)[0];
if (!mainArticle.classList.contains("flex-article")) {
    mainArticle.classList.add("flex-article");
}
mainArticle.classList.replace(mainArticleClass, "article-secondaire");
mainArticle.textContent = "plus du tout intéressant";

let nextElement = mainArticle.nextElementSibling;
if(!nextElement.classList.contains(mainArticleClass)) {
    nextElement.classList.add(mainArticleClass);
}

let h1Article = document.createElement("h1");
h1Article.innerText = "Article principal !";
nextElement.replaceChild(h1Article, nextElement.children[0]);

let pMain = document.querySelector(`.${mainArticleClass} > p`);
pMain.innerHTML = "<strong>Plus </strong> intéressant. <a href='#'>Un lien</a>";

document.querySelectorAll("article:not(.article-principal)")[0].textContent = "Test"


let monLien = document.getElementsByTagName("a")[0] ;
monLien.onclick = function () {
    let couleurJaune =  "rgba(150, 150, 0, 0.5)" ;
    document.body.style.backgroundColor = couleurJaune ;
}

let nouveauFooter = document.createElement("footer");
document.body.appendChild(nouveauFooter);

addElementArticle("principal", "super titre d'article principal", "super contenu d'article principal");
addElementArticle("secondaire", "Article secondaire", "Contenu secondaire")


function addElementArticle(_type, _title, _htmlContent) {
    let articleElement = document.createElement("article");
    let titleElement;
    let paragrapheElement;
    let allArticlesInPage;
    let counterButtonElement;
    let otherCounterElement;

    if (_type === "principal") {
        titleElement = document.createElement("h1");
        titleElement.classList.add("article-principal");
    } else {
        titleElement = document.createElement("h3");
        titleElement.classList.add("article-secondaire");
    }

    titleElement.textContent = _title;

    paragrapheElement = document.createElement("p");
    paragrapheElement.innerHTML = _htmlContent;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(paragrapheElement);

    allArticlesInPage = document.querySelectorAll("main article");
    allArticlesInPage[allArticlesInPage.length - 1].after(articleElement);

    counterButtonElement = document.createElement("button");
    counterButtonElement.innerHTML = "Cliquez-moi (<span>0</span>)";
    counterButtonElement.addEventListener("click", counterClick);
    articleElement.appendChild(counterButtonElement);

    otherCounterElement = document.createElement("p");
    otherCounterElement.innerHTML = "Nombre de click sur l'article : <span class='othercounter'>0</span>";
    articleElement.appendChild(otherCounterElement);
    articleElement.addEventListener("click", otherCounterClick);

}



function counterClick(event) {
    event.stopPropagation();
    let spanElement = event.currentTarget.querySelector("span");
    spanElement.textContent = parseInt(spanElement.textContent) + 1;
}

function otherCounterClick(event) {
    let spanElement = event.currentTarget.querySelector(".othercounter");
    spanElement.textContent = parseInt(spanElement.textContent) + 1;
}