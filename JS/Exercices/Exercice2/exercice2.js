let maListe = [];
for (let i = 0; i < 5000 ; i++) {
    maListe[i] = Math.floor(Math.random() * 500 + 1);
}

console.log('random :  ' + maListe);

for(let i = 0 ; i < maListe.length -1 ; i++) {
    for(let j = 0; j < maListe.length -i-1 ; j++ ) {
        if(maListe[j] > maListe[j + 1]) {
            let temp = maListe[j];
            maListe[j] = maListe[j+1];
            maListe[j+1] = temp;
        }
    }
}

console.log('classé :  ' + maListe);