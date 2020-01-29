/* 1. 
a. False
b. True
c. False
d. False
e. boolean

2.
a. Array é um objeto que possibilita manipular e salvar todos os tipos de dados, organizando-os em uma sequência (matriz linear).
Declaramos um array da seguinte forma:

let array = [elemento0, elemento1, elemento2,...,elemento'n']

b. O index inicial de um array é 0. Com isso, o primeiro elemento será o elemento número 0, não o número 1.

c. O tamanho de um array é determinado pelo parâmetro .length. 
array = [a, b, c, d, e, f, g, h, i]
console.log(array.length) -> será impresso no console a quantidade de itens contidos na matriz, 9.

d.
I. undefined
II. null
III. 11
IV. 3 e 4
V. 19 e 9
VI. 3
VII. 1

Graus Fahrenheit(°F) para Kelvin(K)
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
Graus Celsius(°C) para Graus Fahrenheit (°C)
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

*/


let celsius = 80
let fahrenheit = (celsius)*9/5+32
let kelvin = (fahrenheit-32)*5/9+273.15

fahrenheit = 77
console.log("1.")
console.log("a. " + fahrenheit + " ºF é igual a " + ((fahrenheit-32)*5/9+273.15) + " K.")

fahrenheit = (celsius)*9/5+32
console.log("b. " + celsius + " ºC é igual a " + fahrenheit + " ºF.")

celsius = 30
console.log("c. " + celsius + " ºC é igual a " + (celsius*9/5+32) + " ºF. " + (celsius*9/5+32) + " ºF é igual a " + ((celsius*9/5+32-32)*5/9+273.15) + " K.")

celsius = prompt("Digite o valor em ºC para conversão: ")
console.log("d. " + celsius + " ºC é igual a " + (celsius*9/5+32) + " ºF. " + (celsius*9/5+32) + " ºF é igual a " + ((celsius*9/5+32-32)*5/9+273.15) + " K.")



let nome = prompt("Qual seu nome?")
let endereco = prompt("Qual seu endereço")
let email = prompt("Qual seu e-mail?")
let frutaFavorita = prompt("Qual sua fruta favorita?")
let hobbie = prompt("Tem um hobbie favorito? Se sim, qual?")

console.log("Qual o seu nome?")
console.log("Resposta: " + nome)
console.log("Qual o seu endereço")
console.log("Resposta: " + endereco)
console.log("Qual o seu e-mail?")
console.log("Resposta: " + email)
console.log("Qual o sua fruta favorita?")
console.log("Resposta: " + frutaFavorita)
console.log("Tem um hobbie? Se sim, qual?")
console.log("Resposta: " + hobbie)


let salarioMinimo = prompt("Qual é o valor atual do salário mínimo? ")
let kW = prompt("Quantos kWs sua residência consumiu nesse mês? ")
let kWHora = 0.05

console.log("Você consumiu " + kW + " kW de energia este mês. ")
console.log("O valor a pagar é de R$ " + (kW*kWHora))