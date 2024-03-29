
// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// FUNZIONE

// chiedo 5 numeri
function timer() {
    for (var i = 0; i < 5; i++) {
        numeroUtente = Number(prompt("Inserisci un numero della lista"));
        listaNumeriUtente.push(numeroUtente);
    }
}

let randomNumbers = [];
let listaNumeriUtente = [];
let numeroUtente;

// genero 5 numeri casuali
for (let i = 0; i < 5; i++) {
   let random = Number(Math.floor(Math.random() * 100) + 1);
   randomNumbers.push(random);
}
alert(randomNumbers);
console.log(randomNumbers);

setTimeout(timer, 2000);

console.log(listaNumeriUtente);


