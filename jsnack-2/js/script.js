/* jsnack 2
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */

// dichiaro il mio array contenente dei numeri
let numeri = [1, 2, 3, 7, 8, 21, 9, 11, 13, 22];
console.log(numeri);
// dichiaro la variabile somma che mi servirà in un secondo momento per sommare i numeri in posizione dispari
let sum = 0;
// ciclo for per controllare tutto l'array
for (let index = 0; index < numeri.length; index++) {
  // se la posizione occupata dal numero è dispari allora
  if (index % 2 == 0) {
    console.log('la posizione è pari', numeri[index]);
  } else {
    console.log('la posizione è dispari', numeri[index]);
    sum += numeri[index];
  }
}
// stampo in console la somma
console.log ('la somma dei numeri in posizione dispari è: ' + sum);
