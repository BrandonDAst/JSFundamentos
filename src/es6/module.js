function hello(name = 'Desconocido') {
    return `Hello ${name}`
}

// Exportación 
//export default hello;

// Exportación con CommonJS Module
module.exports = hello;