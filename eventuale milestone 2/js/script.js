// Descrizione:

// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for.
//  Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

// ############################################################################################################

// introduciamo come variabile, data per default, un array che rappresenta la lista della spesa

const shoppingArray = ["8 mele", "12 pesche", "2 pacchi di biscotti", "3 pacchi di detersivi", "1 kg di pasta", "1 bancale d'acqua", "8 bottiglie di coca-cola"];
console.log(shoppingArray);

// voglio provare a usare questo tipo di manipolazione, creando elementi con js, in questo caso UL, e poi aggiungergli qualche classe (bootstrap)
const listElem = document.createElement("ul");
listElem.classList.add("text-white", "text-center");
console.log(listElem);

//creo una variabile legata a un elemento presente gia in html, in questo caso .container, al cui Interno, usando giusta sintassi, inserisco, 
//dopo vari elementi gia presenti in HTML(h1,h3,img), ciò che ho creato sopra
const container = document.querySelector(".container");
container.append(listElem);


// inizializzo sia il contatore per il ciclo while e sia una variabile di accumulo che mi servirà sia dentro che fuori while
let listItem = "";
let i = 0;


while (i < shoppingArray.length) {
    // console.log (shoppingArray[i]);
    // la lista listItem è formata dalla concatenazione di stringhe, opportunamente scritte con sintassi HTML,
    // di <li> progressivi dipendenti dall'indice i
    listItem += `<li>${shoppingArray[i]}</li>`;
    i++;
}

// ora introduco questi LI creati dinamicamente con js, usando giusta sintassi, nell'elemento UL sopra creato, dovrebbe uscire tutto in html

listElem.innerHTML = listItem;



// #########################################################################################################################################################
// MILESTONE 2

// ho voluto aggiungere 3 eventi (button) uno per aggiungere elementi e l'altro per resettare elementi, e l'altro per eliminare solo l ultimo


// Creo un btn AGGIUNGI ELEMENTO con js

const addButton = document.createElement("button");

// aggiungo classi con JS, ma non so perche se uso la sintassi addButton.classlist.add("btn btn-primary max-3") non funziona niente e addirittura scompare, quindi ho scritto 3 righe
addButton.classList.add("btn", "btn-primary", "m-3");
// addButton.classList.add("btn-primary");
// addButton.classList.add("mx-3");


// aggiungo testo all'interno di btn creato 
addButton.innerText = "Aggiungi elemento";

// AL CLICK DI AGGIUNGI .....................
addButton.addEventListener("click", function() {
    const newItem = prompt("Inserisci il nuovo elemento:");

    //verificare se la lista è vuota, eventualmente dopo aver cliccato redbtn
    if (!listElem.innerHTML){
        //Re-inizializzo la variabile solo se la lista è vuota
        listItem ="";        
    }
    
    if (newItem) {
        shoppingArray.push(newItem);
        listItem += `<li>${shoppingArray[shoppingArray.length - 1]}</li>`;
        listElem.innerHTML = listItem;
    }
});
container.append(addButton);


// Creo un btn CANCELLA ULTIMO ELEMENTO LISTA con js

const greenButton = document.createElement("button");

//stesso problema della riga 56
greenButton.classList.add("btn", "btn-success", "m-3");

// aggiungo testo all'interno di btn creato
greenButton.innerText = "Cancella ultimo elemento";

// AL CLICK DI CANCELLA ELEMENTO LISTA .....................cancello l'ultimo elemento
greenButton.addEventListener("click", function() {   

    //verificare se la lista è vuota, eventualmente dopo aver cliccato redbtn
    if (!listElem.innerHTML){
        console.log(listElem.innerHTML);
        
        alert('ATTENZIONE LA LISTA E\' GIA VUOTA');       
    } if (shoppingArray.length !== 0){

        shoppingArray.pop();
        listItem = "";
        i = 0;
        while (i < shoppingArray.length) {
            listItem += `<li>${shoppingArray[i]}</li>`;
            i++;
        }
        
        listElem.innerHTML = listItem;
    }
});

container.append(greenButton);




// Creo un btn CANCELLA LISTA con js

const clearButton = document.createElement("button");

clearButton.classList.add("btn", "btn-danger", "m-3");



// aggiungo testo all'interno di btn creato
clearButton.innerText = "Cancella lista";

// AL CLICK DI CANCELLA LISTA .....................cancello tutti gli elementi di UL
clearButton.addEventListener("click", function() {
  listElem.innerHTML = "";
  
});

container.append(clearButton);