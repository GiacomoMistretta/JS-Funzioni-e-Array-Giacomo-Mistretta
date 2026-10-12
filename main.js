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

