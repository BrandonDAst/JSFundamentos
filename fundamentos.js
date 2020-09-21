console.log("Curso de Fundamentos. Hola Mundo.")
//////////////////////////////////////////////////////////////////
// VARIABLES
//////////////////////////////////////////////////////////////////

// Globales porque no estan dentro de un cuerpo {}
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

//////////////////////////////////////////////////////////////////
// FUNCIONES: Pedazos de codigo reutilizables
//////////////////////////////////////////////////////////////////

// Funcion tradicional
function ImprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`)
}
//ImprimirEdad(nombre, edad)

// El alcance de las funciones. A que variables pueden acceder
function ImprimirNombreMayus(persona) {
    var {
        nombre
    } = persona
    //var nombre = persona.nombre
    console.log(nombre.toUpperCase())

}

function ImprimirNombreMayusDestruct({
    nombre
}) {
    console.log(nombre.toUpperCase())
}
//ImprimirNombreMayus(nombre)

function ImprimirNombreEdad(persona) {
    var {
        nombre,
        edad
    } = persona
    console.log(`Hola, me llamo ${nombre}, y tengo ${edad} años`)
}

//////////////////////////////////////////////////////////////////
// OBJETOS
//////////////////////////////////////////////////////////////////

var brandon = {
    nombre: 'Brandon',
    apellido: 'Diaz',
    edad: 24
}
var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 29
}

//ImprimirNombreMayus(brandon)
//ImprimirNombreMayusDestruct(dario)
//ImprimirNombreMayusDestruct({nombre: 'Pepito'})
//ImprimirNombreEdad(brandon)

//////////////////////////////////////////////////////////////////
// PARAMETROS COMO VALOR Y REFERENCIA
//////////////////////////////////////////////////////////////////
function Cumpleanos(persona) {
    persona.edad += 1 //Afecta el objeto global
}

function CumpleanosNuevoObjeto(persona) {
    return { // Devuelve un nuevo objeto, basado en la entrada. OBJETO LITERAL
        ...persona,
        edad: persona.edad + 1
    }
}

//////////////////////////////////////////////////////////////////
// COMPARACIONES EN JS
//////////////////////////////////////////////////////////////////

var x = 4
var y = "4"
// == Compara valores
// === Compara tipo de dato
// x==y 4=="4" True
// x===y 4==="4" False

var otraPersona = {
    nombre: "Brandon"
}
var otroBrandon = brandon // brandon == otroBrandon TRUE
//Cambiar el nombre a otroBrandon cambia a brandon, son la misma ubicacion en RAM

//////////////////////////////////////////////////////////////////
// ESTRUCTURAS DE CONTROL
//////////////////////////////////////////////////////////////////
// Condicionales
const MAYORIA_EDAD = 18
var luis = {
    nombre: 'Luis',
    apellido: 'Diaz',
    edad: 24,
    ingeniero: true,
    cocinero: false
}
var anonimo = {
    nombre: 'Anonimo',
    apellido: 'Diaz',
    edad: 14,
    ingeniero: true,
    cocinero: false
}

function ImprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)
    if (persona.ingeniero) console.log(`Ingeniero`)
    if (persona.cocinero) console.log(`Cocinero`)
}


function ImprimirMayorEdad(persona) {
    if (EsMayorDeEdad(persona)) console.log(`${persona.nombre} es mayor de edad`)
    else console.log(`${persona.nombre} no es mayor de edad`)
}

//////////////////////////////////////////////////////////////////
// ARROW FUNCTIONS
//////////////////////////////////////////////////////////////////

function ImprimirMayorEdadAnon(persona) {
    if (EsMayorDeEdadAnon(persona)) console.log(`${persona.nombre} es mayor de edad`)
    else console.log(`${persona.nombre} no es mayor de edad`)
}

function EsMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_EDAD
}
const EsMayorDeEdadAnon = function (persona) {
    return persona.edad >= MAYORIA_EDAD
}
const EsMayorDeEdadAnonArrow = (persona) => {
    return persona.edad >= MAYORIA_EDAD
}
const EsMayorDeEdadAnonArrowSimplificado = persona => persona.edad >= MAYORIA_EDAD
const EsMayorDeEdadAnonArrowSimplificadoDestruct = ({
    edad
}) => edad >= MAYORIA_EDAD

//ImprimirProfesiones(luis)
ImprimirMayorEdad(luis)
ImprimirMayorEdadAnon(anonimo)
//console.log(EsMayorDeEdadAnonArrowSimplificado(anonimo))
//console.log(EsMayorDeEdadAnonArrowSimplificadoDestruct(luis))

function PermitirAcceso(persona) {
    if (EsMayorDeEdad(persona)) console.log('Acceso Concedido')
    else console.log('Acceso Denegado')
}

PermitirAcceso(luis)
PermitirAcceso(anonimo)