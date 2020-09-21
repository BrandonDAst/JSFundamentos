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
    edad: 24,
    peso: 80,
    ingeniero: true,
    cocinero: false
}
var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 29,
    peso: 85,
    ingeniero: true,
    cocinero: false
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
// ESTRUCTURAS DE CONTROL IF
//////////////////////////////////////////////////////////////////
const MAYORIA_EDAD = 18
var luis = {
    nombre: 'Luis',
    apellido: 'Diaz',
    edad: 24,
    peso: 60,
    ingeniero: true,
    cocinero: false
}
var anonimo = {
    nombre: 'Anonimo',
    apellido: 'Diaz',
    edad: 14,
    peso: 65,
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
//ImprimirMayorEdad(luis)
//ImprimirMayorEdadAnon(anonimo)
//console.log(EsMayorDeEdadAnonArrowSimplificado(anonimo))
//console.log(EsMayorDeEdadAnonArrowSimplificadoDestruct(luis))

function PermitirAcceso(persona) {
    if (EsMayorDeEdad(persona)) console.log('Acceso Concedido')
    else console.log('Acceso Denegado')
}

//PermitirAcceso(luis)
//PermitirAcceso(anonimo)

//////////////////////////////////////////////////////////////////
// ESTRUCTURAS DE CONTROL FOR
//////////////////////////////////////////////////////////////////
var diferenciaPeso = 0.2

const SubeDePeso = persona => persona.peso += diferenciaPeso
const BajaDePeso = persona => persona.peso -= diferenciaPeso

//console.log(`Al inicio del año Brandon pesaba ${brandon.peso} KG.`)

for (var i = 1; i <= 365; i++) {
    var rnd = Math.random()

    if (rnd < 0.25) SubeDePeso(brandon)
    else if (rnd < 0.50) BajaDePeso(brandon)
}

//console.log(`Al final del año Brandon pesa ${brandon.peso.toFixed(1)} KG.`)

//////////////////////////////////////////////////////////////////
// ESTRUCTURAS DE CONTROL WHILE
//////////////////////////////////////////////////////////////////
const comeMucho = () => Math.random() < 0.3
const comePoco = () => Math.random() < 0.4
const pesoMeta = brandon.peso - 3
var dias = 0

while (brandon.peso > pesoMeta) {
    //debugger
    if (comeMucho()) {
        SubeDePeso(brandon)
    }
    if (comePoco()) {
        BajaDePeso(brandon)
    }
    dias += 1
}

//console.log(`Pasaron ${dias}`)

//////////////////////////////////////////////////////////////////
// ESTRUCTURAS DE CONTROL DO-WHILE
//////////////////////////////////////////////////////////////////
var contador = 0
const llueve = () => Math.random() < 0.25
var veces = 'veces'
do {
    contador++

} while (!llueve())
if (contador === 1) veces = 'vez'

//console.log('Fui a ver si llovia ' + contador + ` ${veces}`)

//////////////////////////////////////////////////////////////////
// ESTRUCTURAS DE CONTROL SWITCH
//////////////////////////////////////////////////////////////////
var signo = 'libra' //prompt('¿Cual es tu signo?')
switch (signo.toLowerCase()) {
    case 'acuario':
        console.log('Eres acuario')
        break
    case 'libra':
        console.log('Eres libra')
        break
    default:
        console.log('Signo no encontrado')
        break
}

//////////////////////////////////////////////////////////////////
// ARRAYS
//////////////////////////////////////////////////////////////////
//Inicializar y leer
var personas = [brandon, luis, dario, anonimo]
//var primerPeso = personas[0]['peso']
var primerPeso = personas[0].peso
var cantidadPersonas = personas.length

const esGorda = ({
    peso
}) => {
    return peso > 70
}

var personasGordas = personas.filter(esGorda)
// var personasGordas = personas.filter(function (persona) {
//     return persona.peso > 70
// })

//console.log(personasGordas)

//Transformar Array
//Esta funcion solo retorna un nuevo objeto basado en la entrada
const pasarPesoAGrs = (persona) => ({
    ...persona,
    peso: persona.peso * 1000
})

var personasGrs = personas.map(pasarPesoAGrs)

//Reducir un arreglo a un valor unico
const reducer = (acum, {
    peso
}) => {
    return acum + peso
}
var pesoTotal = personas.reduce(reducer, 0)
console.log(`Las personas pesan un total de ${pesoTotal.toFixed(1)} KGs.`)