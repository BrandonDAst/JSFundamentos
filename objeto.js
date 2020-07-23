var brandon = {
    nombre: 'Brandon',
    apellido: 'Diaz',
    edad: 24
}

var dario = {
    nombre: 'Dario',
    apellido: 'Sanchez',
    edad: 27
}



function imprimirNombre(persona) {
    //var nombre = nombre.persona
    var {
        nombre
    } = persona
    console.log(nombre.toUpperCase())
}

function imprimirNombreEdad(persona) {
    var {
        nombre
    } = persona
    var {
        edad
    } = persona
    console.log(`Hola, soy ${nombre} y tengo ${edad} años`)
}

imprimirNombreEdad(brandon)
imprimirNombreEdad(dario)
imprimirNombre({
    nombre: 'Vero'
})

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 10

    }

}