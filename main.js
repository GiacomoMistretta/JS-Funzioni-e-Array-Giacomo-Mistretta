// ESERCIZIO 1
console.log(`ESERCIZIO 1`);


function calcolatrice(a,b,c,d,e){
    let somma = a+b+c+d+e;
    let media = somma/5;
    console.log(`La somma tra i numeri equivale a ${somma} e la media equivale a ${media}`)
}

calcolatrice(1,2,3,4,5);

// ESERCIZIO 2
console.log(`ESERCIZIO 2`);


let number = [2]

for (let i = 0; i <=10; i++) {
    console.log(number*i);
    console.log(`al ciclo n° ${i} ho moltiplicato il numero per ${i}`); 
}

// ESERCIZIO 3
console.log(`ESERCIZIO 3`);

function simulazione(numberOfShots) {
    let giocatore1 = 0;
    let giocatore2 = 0;

    for (let i = 0; i < numberOfShots; i++) {
        let tiro1 = Math.floor(Math.random() * (6 + 1 - 1) + 1);
        giocatore1 += tiro1;

        let tiro2 = Math.floor(Math.random() * (6 + 1 - 1) + 1);
        giocatore2 += tiro2;
    }

    console.log(`Punteggio finale del giocatore 1: ${giocatore1}`);
    console.log(`Punteggio finale del giocatore 2: ${giocatore2}`);

    if (giocatore1 > giocatore2) {
        console.log(`Il giocatore 1 ha vinto la partita!`);
    } else if (giocatore2 > giocatore1) {
        console.log(`Il giocatore 2 ha vinto la partita!`);
    } else {
        console.log(`La partita è in parità!`);
    }
}

simulazione(5);

// ESERCIZIO 4
console.log(`ESERCIZIO 4`);


function numero(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 15 === 0) {
            console.log('BuzzFizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }
}

numero(30);

// ESERCIZIO 5
console.log(`ESERCIZIO 5`);


function contare(num) {
    let stringa = String(num);
    
    let quantita = stringa.length;
    
    if (quantita === 1) {
        return quantita + " cifra";
    } else {
        return quantita + " cifre";
    }
}

console.log(contare(9));
console.log(contare(99));

// ESERCIZIO 6
console.log(`ESERCIZIO 6`);


let array = ["Donato", "Nicola", ["Annalisa", "Paola"], "Alessandro", ["Roberto", "Valerio", "Francesco"]];

console.log(array);

console.log(array[2][0]);
console.log(array[4][2]);

