/* Consegna esercizio:
1. Chiedere il nome all'utente;
2. Chiedere cognome;
3. Chiedere colore preferito;
4. Stampare su schermo la password generata che sarà tipo nomecognomecolorepreferito23.
*/

const nameUser = prompt('Qual è il tuo nome?');
const surnameUser = prompt('E il tuo cognome?');
const colorUser = prompt('Ora dimmi il tuo colore preferito.');

const age = 23;

console.log(nameUser, surnameUser, colorUser);

const password = nameUser + surnameUser + colorUser + age;

console.log(password);

const outputStr = `
Benvenuto ${nameUser}, <br>
Ecco a te la tua password! <br>
${password} <br>
:)
`

console.log(outputStr);

document.getElementById('message').innerHTML = outputStr;