/* jsnack 1
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati. */

let nomi = ['Leonardo', 'Matteo', 'Luca', 'Martina', 'Veronica', 'Irene'];
let cognomi = ['Rossi', 'Ferrari', 'Bianchi', 'Romano', 'Gallo', 'Costa'];

for (let index = 0; index < 5; index++) {
  let listaInvitati = nomi[Math.floor(Math.random() * nomi.length)] + cognomi[Math.floor(Math.random() * cognomi.length)];
  console.log(listaInvitati);
}

