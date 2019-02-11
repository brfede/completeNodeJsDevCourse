console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

console.log('Result: ', notes.add(3, 4));
// var user = os.userInfo(); 

//Crea documento
/* Si el documento ya existe, sólo escribe el segundo parámetro.

    Si el documento no existe crea el documento y escribe el segundo parámetro*/
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}!`, (err) => {
//     if(err){
//         console.log('No se pudo crear el documento: ' + err);
//     }
// });
