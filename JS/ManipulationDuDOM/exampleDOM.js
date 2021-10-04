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
    let couleurJaune =  "rgb(255, 255, 0)" ;
    document.body.style.backgroundColor = couleurJaune ;
}