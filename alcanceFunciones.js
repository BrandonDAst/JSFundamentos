var nombre = 'Brandon' //Variable global


function imprimirNombreMayusculas(nombre) { //variable local
    window.nombre // variable global
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreMayusculas(nombre)