// Descrizione:

// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for.
//  Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

// ############################################################################################################

// introduciamo come variabile, data per default, un array che rappresenta la lista della spesa

const shoppingArray = ["mele", "pesche", "biscotti", "detersivi", "pasta", "acqua", "coca-cola"];
console.log(shoppingArray, typeof shoppingArray);

// voglio provare a usare questo tipo di manipolazione, creando elementi con js, in questo caso UL
const listElem = document.createElement("ul");
console.log(listElem);

//creo una variabile legata a un elemento presente gia in html, in questo caso .container, al cui Interno, usando giusta sintassi, inserisco, 
//dopo vari elementi gia presenti in HTML, ciò che ho creato sopra
const container = document.querySelector(".container");
container.append(listElem);


// inizializzo sia il contatore per il ciclo while e sia una variabile di accumulo che mi servirà sia dentro che fuori while
let listItem = "";
let i = 0;


while (i < shoppingArray.length) {
    // console.log (shoppingArray[i]);
    // la lista listItem è formata dalla concatenazione di stringhe, opportunamente scritte con sintassi HTML,
    // di <li> progressivi dipendenti dall'indice i
    listItem += `<li class= "text-white">${shoppingArray[i]}</li>`;
    i++;
}

// ora introduco questi LI creati dinamicamente con js, usando giusta sintassi, nell'elemento UL sopra creato, dovrebbe uscire tutto in html

listElem.innerHTML = listItem;


