/*R. Declarada a variável sum = 0, o código fará para cada variável i (indexador, declarado em for) com valor zero, 
menor que 15, e será incrementado 1 ao seu valor. A operação a ser feita após é a variável sum ser somada com a 
variável i. Por exemplo:

Em i = 0, o valor inicial de sum também é. O console exibe zero como resultado. Ao incrementar um em i, 
o valor a ser impresso no console é 1, pois sum = 0 + i= 1 = 1. E enquanto não chegar o valor de i igual a 15, 
esse processo se repetirá. A soma é 105.

 let sum = 0
for(let i = 0; i < 15; i++) {
  sum+=i
}
console.log(sum)

=================================


2.
a. O comando .push permite acrescentarmos mais um item na lista, mesmo essa lista sendo uma constante.
b. Para cada item da lista: se o item for múltiplo de 5, ou seja, se o item for dividido por 5 e o resto der 0,
ele será adicionado a uma nova lista.
Para 10: se 10 dividido por 5 tiver resto 0 (V), adicione-o a uma nova lista.
Para 11: se 11 divivido por 5 tiver resto 0 (F), adicione-o a uma nova lista. 
Para 12: se 12 divivido por 5 tiver resto 0 (F), adicione-o a uma nova lista.
Para 15: se 15 divivido por 5 tiver resto 0 (v), adicione-o a uma nova lista.
Para 18: se 18 divivido por 5 tiver resto 0 (F), adicione-o a uma nova lista.
Para 19: se 19 divivido por 5 tiver resto 0 (F), adicione-o a uma nova lista.
Para 21: se 21 divivido por 5 tiver resto 0 (F), adicione-o a uma nova lista.
Para 23: se 23 divivido por 5 tiver resto 0 (F), adicione-o a uma nova lista.
Para 25: se 25 divivido por 5 tiver resto 0 (V), adicione-o a uma nova lista.
Para 27: se 27 divivido por 5 tiver resto 0 (F), adicione-o a uma nova lista.
Para 30: se 30 divivido por 5 tiver resto 0 (V), adicione-o a uma nova lista.

Após encerrar os itens da lista, o console exibirá a nova lista formada por: 10, 15, 25, 30  

c. Alterando a variável numero para 3, teríamos a condicional dessa forma:
Para 10: se 10 dividido por 3 tiver resto 0 (F), adicione-o a uma nova lista.
Para 11: se 11 divivido por 3 tiver resto 0 (F), adicione-o a uma nova lista. 
Para 12: se 12 divivido por 3 tiver resto 0 (V), adicione-o a uma nova lista.
Para 15: se 15 divivido por 3 tiver resto 0 (v), adicione-o a uma nova lista.
Para 18: se 18 divivido por 3 tiver resto 0 (V), adicione-o a uma nova lista.
Para 19: se 19 divivido por 3 tiver resto 0 (F), adicione-o a uma nova lista.
Para 21: se 21 divivido por 3 tiver resto 0 (V), adicione-o a uma nova lista.
Para 23: se 23 divivido por 3 tiver resto 0 (F), adicione-o a uma nova lista.
Para 25: se 25 divivido por 3 tiver resto 0 (F), adicione-o a uma nova lista.
Para 27: se 27 divivido por 3 tiver resto 0 (V), adicione-o a uma nova lista.
Para 30: se 30 divivido por 3 tiver resto 0 (V), adicione-o a uma nova lista.

Após fazer todos os testes, o console exibirá a nova lista formada por: 12, 15, 18, 21, 27, 30

Alterando a variável numero para 4:

Para 10: se 10 dividido por 4 tiver resto 0 (F), adicione-o a uma nova lista.
Para 11: se 11 divivido por 4 tiver resto 0 (F), adicione-o a uma nova lista. 
Para 12: se 12 divivido por 4 tiver resto 0 (V), adicione-o a uma nova lista.
Para 15: se 15 divivido por 4 tiver resto 0 (F), adicione-o a uma nova lista.
Para 18: se 18 divivido por 4 tiver resto 0 (F), adicione-o a uma nova lista.
Para 19: se 19 divivido por 4 tiver resto 0 (F), adicione-o a uma nova lista.
Para 21: se 21 divivido por 4 tiver resto 0 (F), adicione-o a uma nova lista.
Para 23: se 23 divivido por 4 tiver resto 0 (F), adicione-o a uma nova lista.
Para 25: se 25 divivido por 4 tiver resto 0 (F), adicione-o a uma nova lista.
Para 27: se 27 divivido por 4 tiver resto 0 (F), adicione-o a uma nova lista.
Para 30: se 30 divivido por 4 tiver resto 0 (F), adicione-o a uma nova lista.

Após todos os testes, a nova lista é: 12.

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista){
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)


DESAFIO (Se der tempo)


=============================

*/

//3
let arrayOriginal = [1, 2, 4, 8, 16, 32, 64, 100, 128, 256, 420, 512, 890, 1024, 2048, 4096, 7550, 8192, 16384]
//a.
let maiorNumero = arrayOriginal[0]
let menorNumero = arrayOriginal[6]

for(let i = 0; i < arrayOriginal.length; i++) {
    const elemento = arrayOriginal[i]
    if(elemento > maiorNumero){
        maiorNumero = elemento
    }
    
    else {
      menorNumero = elemento
    }
}

console.log("O maior número da sequência é: " + maiorNumero)
console.log("O menor número da sequência é: " + menorNumero)

//b.
const arrayDivDez = []
const numero = 10

for(const item of arrayOriginal) {
    if(item%numero === 0){
        arrayDivDez.push(item)
    }
}

console.log(arrayDivDez)

//c.
const arrayPares = []
const par = 2


for(const item of arrayOriginal) {
    if(item%par === 0){
        arrayPares.push(item)
        
    }
}

console.log(arrayPares)

//d.

const arrayMensagemIndex = ["O elemento do Index "]
const palavra = ["é: "]
let i = "" 
let mensagem = ""

for(i = 0; i < arrayOriginal.length; i++) {
    mensagem = arrayMensagemIndex + "" + [i] + " " + palavra + "" + arrayOriginal[i]
    console.log(mensagem)
}




