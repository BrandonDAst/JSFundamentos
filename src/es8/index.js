const data = {
    frontend: 'Oscar',
    backend: 'Ana',
    desing: 'Brandon'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

const values = Object.values(data)
console.log(values)
console.log(values.length)

const str = 'Hello';
console.log(str.padStart(7, 'h'))

const obj = {
    name: 'Brandon'
}



/// Async y await
const helloWorld = (check) => {
    return new Promise((resolve, reject) => {
        (check) ?
        setTimeout(() => resolve('Hello Delayed World!'), 3000): reject(new Error('Test Error'))
    })
};

const HelloAsync = async () => {
    const trueHello = await helloWorld(true);
    console.log(trueHello)
}

HelloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld(true);
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction();