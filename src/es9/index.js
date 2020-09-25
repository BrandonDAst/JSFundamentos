const obj = {
    nombre: 'Brandon',
    age: 25,
    country: 'MX'
};

let {
    age,
    ...todo
} = obj
console.log(todo)

// Propagación
const obj2 = {
    nombre: 'Juan',
    age: 32
}
const obj3 = {
    ...obj2,
    country: 'MX'
}
console.log(obj3)

// Terminas promesas
const FPromesa = () => {
    return new Promise((resolve, reject) => {
        (true) ? resolve('Hello World'): reject(new Error('Test Error'))
    })
}
FPromesa()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalmente"))


// Regex
const regexDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexDate.exec('2020-09-25')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)