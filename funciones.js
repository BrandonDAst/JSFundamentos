var nombre = 'Brandon',
    edad = 24
var brandon = {
    nombre: 'Brandon',
    apellido: 'Diaz',
    edad: 24
}

function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} anios`)
}
imprimirEdad(nombre, edad)

function imprimirSiEsMayor(persona) {
    if (persona.edad >= 18) { //Brandon es mayor
        console.log(`${persona.nombre} es ayor de edad`)
    } else { //Brandon es menor de edad
        console.log(`${persona.nombre} es menor de edad`)
    }
}
imprimirSiEsMayor(brandon)