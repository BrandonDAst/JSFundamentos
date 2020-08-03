var brandon = {
    nombre: 'Brandon',
    edad: 24,
    esProgramador: true
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = function (persona) { //Funcion anonima
    return persona.edad >= MAYORIA_DE_EDAD
}
const esMayorArrow = persona => persona.edad >= MAYORIA_DE_EDAD
const esMayorArrowDestruct = ({
    edad
}) => edad >= MAYORIA_DE_EDAD



function ImprimirSiEsMayor(persona) {
    if (persona.esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}