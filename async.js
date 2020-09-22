//////////////////////////////////////////////////////////////////
// CALLBACKS
//////////////////////////////////////////////////////////////////
// Un callback es una función que JS ejecutará cuando regrese la respuesta del servidor
// Como funciona el tiempo en JS

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const REQUEST_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const REQUEST_OPTIONS = {
    crossDomain: true
}
const ON_PEOPLE_RESPONSE = (person) => {
    console.log(`Hola, yo soy ${person.name}`)
}
//$.get(REQUEST_URL, REQUEST_OPTIONS, ON_PEOPLE_RESPONSE)

function ObtenerPersonaje(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
        .get(URL, REQUEST_OPTIONS, callback)
        .fail(() => {
            console.log(`No se pudo obtener el personaje ${id}`)
        })
}

// Callback HELL
// ObtenerPersonaje(1, function (person) {
//     console.log(`Hola, yo soy ${person.name}`)
//     ObtenerPersonaje(2, function (person) {
//         console.log(`Hola, yo soy ${person.name}`)
//         ObtenerPersonaje(3, function (person) {
//             console.log(`Hola, yo soy ${person.name}`)
//             ObtenerPersonaje(4, function (person) {
//                 console.log(`Hola, yo soy ${person.name}`)
//                 ObtenerPersonaje(5, function (person) {
//                     console.log(`Hola, yo soy ${person.name}`)
//                 })
//             })
//         })
//     })
// })

//////////////////////////////////////////////////////////////////
// PROMISE
//////////////////////////////////////////////////////////////////
// Son valores que aun no conocemos

// Tienen 3 estados: PENDING, FULFILLED (.THEN(VALOR => {} )), REJECTED (.CATCH( => {}))

function ObtenerPersonajePromesa(id) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(URL, REQUEST_OPTIONS, function (personaje) {
                resolve(personaje)
            })
            .fail(() => reject(id))
    })
}

//Promesas en Serie
// ObtenerPersonajePromesa(1)
//     .then((p1) => {
//         console.log(`El personaje 1 es ${p1.name}`)
//         return ObtenerPersonajePromesa(2)
//     })
//     .then((p2) => {
//         console.log(`El personaje 2 es ${p2.name}`)
//         return ObtenerPersonajePromesa(3)
//     })
//     .then((p3) => {
//         console.log(`El personaje 3 es ${p3.name}`)
//         return ObtenerPersonajePromesa(4)
//     })
//     .then((p4) => {
//         console.log(`El personaje 4 es ${p4.name}`)
//         return ObtenerPersonajePromesa(5)
//     })
//     .then((p5) => {
//         console.log(`El personaje 5 es ${p5.name}`)
//         //return ObtenerPersonajePromesa(4)
//     })
//     .catch((id) => {
//         console.log(`Sucedió un error al obtener el personaje ${id}`)
//     })

//Promesas en paralelo
// var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var promesas = ids.map(id => ObtenerPersonajePromesa(id))

// Promise
//     .all(promesas)
//     .then(personajes => console.log(personajes))
//     .catch(id => {
//         console.log(`Sucedió un error al obtener el personaje ${id}`)
//     })

// Async await
async function ObtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var promesas = ids.map(id => ObtenerPersonajePromesa(id))

    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        console.log(`Sucedió un error al obtener el personaje ${id}`)
    }
}

ObtenerPersonajes()