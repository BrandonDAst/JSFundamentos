console.log("Curso de Fundamentos. Hola Mundo.")
//////////////////////////////////////////////////////////////////
// VARIABLES
//////////////////////////////////////////////////////////////////
var nombre = 'Brandon',
    apellido = 'Diaz',
    edad = 25,
    peso = 80
var nombreMayus = nombre.toUpperCase()
var apellidoMinus = apellido.toLowerCase()
var primeraLetra = nombre.charAt(0)
var cantidadLetras = nombre.length
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
var subStr = nombre.substr(1, 3)

console.log('Hola ' + nombre + ' ' + apellido)

// Numeros enteros
edad = edad + 1
edad += 1
peso = peso - 1
peso -= peso

// Numeros con decimales
var precioVino = 200.3
var totalDecimal = precioVino * 100 * 3 / 100
var totalRound = Math.round(precioVino * 100 * 3) / 100
var totalDosDecimal = totalRound.toFixed(2) //String
var totalDosDecimalNoString = parseFloat(totalDosDecimal)

var pizza = 8
var personas = 2
var rebanadas = pizza / personas