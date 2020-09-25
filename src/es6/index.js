// Antes de ES6
function oldFunction(name, age, country) {
    var name = name || 'Brandon';
    var age = age || 25;
    var country = country || 'MX';

    console.log(name, age, country);
}

// Con ES6
function newFunction(n = 'Brandon', a = 24, c = 'MX') {
    console.log(n, a, c);
}

newFunction();
newFunction('Ricardo', 23, 'CO')

// Template literals

let h = 'Hello'
let w = 'World'
let hw = `${h} ${w}`
console.log(hw)

// Des estructurar
let person = {
    name: 'Brandon',
    age: 24,
    country: 'MX'
}
let {
    name,
    age
} = person

console.log(name)

// Operador de propagación
let team1 = ['A', 'B', 'C']
let team2 = ['D', 'E', 'F']
let teams = ['G', ...team2, ...team1]
console.log(teams)

// Let y su alcance
{
    var varValue = 'v'
} {
    let letValue = 'l'
    console.log(letValue)
}

console.log(varValue)
//console.log(letValue)

let name = 'Brandon'
let age = 25
oldObj = {
    name: name,
    age: age
};
newObj = {
    name,
    age
};
console.log(newObj)

// Arrow functions
const names = [{
    name: 'Brandon',
    age: 25
}, {
    name: 'Mimi',
    age: 24
}]
let listNames = names.map(function (item) {
    console.log(item.name)
})

let listNamesArrow = names.map(item => console.log(item.name));
const listOfNameConst = (name, age, country) => {

}

const listOfNames4 = name => {}
const square = num => num * num;

// Promesas
const checkPromise = (check) => {
    return new Promise((resolve, reject) => {
        if (check) resolve('Chido')
        else reject('Chale')
    });
}
checkPromise(true)
    .then(response => console.log(response))
    .catch(error => console.log(error))
checkPromise(false)
    .then(response => console.log(response))
    .catch(error => console.log(error))

// Clases
class Calculator {
    constructor() {
        this.A = 0;
        this.B = 0;
    }
    sum(A, B) {
        this.A = A;
        this.B = B;
        return this.A + this.B;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 2))

const hello = require('./module')
console.log(hello());

// Generadores

hello();

function* helloWorld() {
    if (true)
        yield 'Hello, yield!'
    if (true)
        yield 'Again, yield!'
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);