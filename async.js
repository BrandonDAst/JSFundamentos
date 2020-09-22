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

    $.get(URL, REQUEST_OPTIONS, (person) => {
        console.log(`Hola, yo soy ${person.name}`)
        if (callback) {
            callback()
        }
    })
}

// Callback HELL
ObtenerPersonaje(1, function () {
    ObtenerPersonaje(2, function () {
        ObtenerPersonaje(3, function () {
            ObtenerPersonaje(4, function () {
                ObtenerPersonaje(5)
            })
        })
    })
})