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
ObtenerPersonaje(1, function (person) {
    console.log(`Hola, yo soy ${person.name}`)

    ObtenerPersonaje(2, function (person) {
        console.log(`Hola, yo soy ${person.name}`)

        ObtenerPersonaje(3, function (person) {
            console.log(`Hola, yo soy ${person.name}`)

            ObtenerPersonaje(4, function (person) {
                console.log(`Hola, yo soy ${person.name}`)

                ObtenerPersonaje(5, function (person) {
                    console.log(`Hola, yo soy ${person.name}`)
                })
            })
        })
    })
})