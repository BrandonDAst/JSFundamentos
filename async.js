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

ObtenerPersonajePromesa(1)
    .then(function (personaje) {
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(function (id) {
        console.log(`Sucedió un error al obtener el personaje ${id}`)
    })