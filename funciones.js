const MAYORIA_EDAD = 18
var brandon = {
    nombre: 'Brandon',
    apellido: 'Diaz',
    edad: 24
}

//Funciones que retornan valores
function esMayor(persona) {
    return persona.edad >= MAYORIA_EDAD
}

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