console.log("Curso de Fundamentos. Hola Mundo.")
//////////////////////////////////////////////////////////////////
// VARIABLES
//////////////////////////////////////////////////////////////////
var nombre = 'Brandon', apellido = 'Diaz', edad = 25
var nombreMayus = nombre.toUpperCase()
var apellidoMinus = apellido.toLowerCase()
var primeraLetra = nombre.charAt(0)
var cantidadLetras = nombre.length
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
var subStr = nombre.substr(1,3)

console.log('Hola ' + nombre + ' ' + apellido)
console.log ('Tengo '+ edad + ' años')
console.log(`Hola {nombre}`)