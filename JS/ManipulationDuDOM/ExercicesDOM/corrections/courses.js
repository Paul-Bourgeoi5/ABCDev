const listeDeCourse = prompt("Entrez votre liste de course,  séparez les articles par des virgules.");
let tableauArticle = listeDeCourse.split(",");

let body = document.querySelector("body");

let ul = document.createElement("ul");
body.appendChild(ul);

for(let i = 0 ; i < tableauArticle.length ; i++) {
	let newLi = document.createElement("li");
	newLi.textContent = tableauArticle[i];
	ul.appendChild(newLi);

// body.innerHTML += "<p> Un paragraphe <strong>avec du texte important</strong></p>"





}