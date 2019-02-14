// var obj = {
//     name: 'Fede',
//     age: 25
// }
// //stringify toma el objeto que le pasemos como argumento y lo convierte en JSON
// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);
// /* OUTPUT:
//     string
//     {"name":"Fede","age":25} */

// /*Si obtuvieramos el siguiente json de un servidor no pdoríamos usarlo así no más
// ya que person.name no existe porque no es un objeto, entonces debo pasarlo a 
// objeto*/
// var personString = '{"name": "Fede", "age": 29}';

// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
// /* 
// OUTPUT:
//     object
//     { name: 'Fede', age: 29 }
//  */

//Importo librería
const fs = require('fs');

//Declaro objeto
var originalNote = {
    title: "Some Title",
    body: "Some body"
};

//Convierto el objeto a JSON
var originalNoteString = JSON.stringify(originalNote);

//Creo archivo json y le paso el json creado en el paso anterior
fs.writeFileSync('notes.json', originalNoteString);

//Leo el archivo y guardo el contenido en una variable
var noteString = fs.readFileSync('notes.json');

//Convierto el contenido a objeto
var note = JSON.parse(noteString);

//Muestro el resutlado
console.log(typeof note);
console.log(note.title);