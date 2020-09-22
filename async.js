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

function ObtenerPersonaje(id) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, REQUEST_OPTIONS, ON_PEOPLE_RESPONSE)
}

ObtenerPersonaje(1)
ObtenerPersonaje(2)
ObtenerPersonaje(3)