let affichage = document.createElement("p");

const heureComplete = prompt("Donnez une heure en heure:minute:seconde").split(":");

let heure = parseInt(heureComplete[0]);
let minute = parseInt(heureComplete[1]);
let seconde = parseInt(heureComplete[2]);

if(isNaN(heure) || isNaN(minute) || isNaN(seconde)) {
    console.log("Entrez des nombres !!");
} else if(heure < 0 || heure > 23 || minute < 0 || minute > 59 || seconde < 0 || seconde > 59){
    console.log("Entrez des valeurs possibles");
} else {
    console.log(`${heure}:${minute}:${seconde}`);
 
    affichage.textContent = `${heure}:${minute}:${seconde}`;
}

document.body.appendChild(affichage);


affichage.addEventListener("click", function() {
    if(seconde < 59) {
        seconde++;
    } else {
        seconde = 0;
        if(minute < 59) {
            minute++;
        } else {
            minute = 0;
            if (heure < 23) {
                heure++;
            } else {
                heure = 0;
            }
        }
    }
    console.log(`Nouvelle heure : ${(heure<10)? '0'+heure : heure}:${(minute <10)? '0'+minute : minute}:${(seconde <10)? '0'+seconde : seconde}`);
    
    affichage.textContent = `${(heure<10)? '0'+heure : heure}:${(minute <10)? '0'+minute : minute}:${(seconde <10)? '0'+seconde : seconde}`;
    
});