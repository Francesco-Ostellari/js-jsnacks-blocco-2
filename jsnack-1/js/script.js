/* jsnack 1
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati. */

// dichiaro array nomi
let nomi = ['Leonardo', 'Matteo', 'Luca', 'Martina', 'Veronica', 'Irene'];
// dichiaro array cognomi
let cognomi = ['Rossi', 'Ferrari', 'Bianchi', 'Romano', 'Gallo', 'Costa'];

// ciclo for per controllare l'array
for (let index = 0; index < 5; index++) {
  // genero casualmente nomi e cognomi partendo dagli array
  let listaInvitati = nomi[Math.floor(Math.random() * nomi.length)] + cognomi[Math.floor(Math.random() * cognomi.length)];
  // stampo in console la lista degli invitati
  console.log(listaInvitati);
}

