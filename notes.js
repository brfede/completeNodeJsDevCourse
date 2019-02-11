console.log('Starting notes');

/* Module es un objeto en node, que guarda información de los archivos que participan en la aplicación
y estén conectados entre sí. Es por esto que se puede exportar y si se lo importa en otro documento, este segundo puede
acceder al código que tiene el primero 
    Con ES6 se puede exportar así "export const age = 25;"

*/
module.exports.add = (a, b) => {
    return a + b;
};