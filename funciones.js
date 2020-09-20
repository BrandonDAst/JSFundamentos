const MAYORIA_EDAD = 18
var brandon = {
    nombre: 'Brandon',
    apellido: 'Diaz',
    edad: 24
}

//Funciones que retornan valores
function esMayorFuncion(persona) {
    return persona.edad >= MAYORIA_EDAD
}
const esMayorAnon = function (persona) {
    return persona.edad >= MAYORIA_EDAD
}
const esMayorAnonArrow = (persona) => {
    persona.edad >= MAYORIA_EDAD
}
const esMayorAnonArrowSimple = (persona) => persona.edad >= MAYORIA_EDAD
const esMayorAnonArrowSinParen = persona => persona.edad >= MAYORIA_EDAD
const esMayorAnonArrowDestruct = ({
    edad
}) => edad >= MAYORIA_EDAD


function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} anios`)
}

function imprimirSiEsMayor(persona) {
    if (esMayor(persona)) { //Brandon es mayor
        console.log(`${persona.nombre} es mayor de edad`)
    } else { //Brandon es menor de edad
        console.log(`${persona.nombre} es menor de edad`)
    }
}