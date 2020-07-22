var edad = 24
//Incremento 
//edad = edad + 1
edad += 1

var peso = 75
//decremento
//peso = peso - 2
peso -= 2

var sandwich = 1
//peso = peso + sandwich
peso += sandwich

var futbol = 3
//peso = peso - futbol
peso -= futbol

var precioVino = 200.3
var total = precioVino * 3
// imprime 600.9000000000001 esto se debe a la manera de almacenar los datos en la memoria RAM
total = Math.round(precioVino * 100 * 3) / 100
var totalStr = total.toFixed(2)
var total2 = parseFloat(totalStr)

var pizza = 8
var personas = 2
var rebanadasPP = pizza / personas