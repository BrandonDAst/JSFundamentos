var brandon = {
    nombre: 'Brandon',
    apellido: 'Diaz',
    edad: 24,
    esProgramador: true,
    peso: 75
}

console.log(`Al inicio del ciclo ${brandon.nombre} pesaba ${brandon.peso} Kg`)
const AumentarPeso = persona => persona.peso += DIFF_PESO
const DisminuirPeso = persona => persona.peso -= DIFF_PESO


const DIFF_PESO = 0.2

for (var i = 1; i <= 365; i++) {
    var random = Math.random()
    if (random < 0.25) AumentarPeso(brandon)
    else if (random < 0.5) DisminuirPeso(brandon)
}

console.log(`Al final del ciclo ${brandon.nombre} pesa ${brandon.peso.toFixed(2)} Kg`)