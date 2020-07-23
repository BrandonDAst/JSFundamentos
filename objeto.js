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



function imprimirNombre({
    nombre
}) {
    console.log(nombre.toUpperCase())
}

imprimirNombre(brandon)
imprimirNombre(dario)
imprimirNombre({
    nombre: 'Vero'
})