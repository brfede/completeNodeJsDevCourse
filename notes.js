console.log('Starting notes');

var addNote = (title, body) => {
    console.log('Adding note ', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Reading note: ', title);
}

var removeNote = (title) => {
    console.log('Removing note: ', title);
}

module.exports = {
    addNote: addNote, //en ES6 si tengo una property cuyo nombre es igual al valor, basta con poner la property no más
    getAll,
    getNote,
    removeNote
}