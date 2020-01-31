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


DESAFIO 

Quando digitamos o número 4 no prompt, ele considera o valor que consta na quantidadeAtual e, enquanto a quantidadeAtual
for menor que a total (a digitada), será criada uma linha e, para cada variável asterisco com valor inicial 0, enquanto
o valor de asteriscos for menor que a soma de quantidadeAtual com 1, com o incremento no valor de asteriscos também no
valor de 1; na linha será colocada a quantidade zeros correspondentes ao número da linha. Logo após, a linha passa a ter 
a quantidade de zeros respectiva à sua posição, e o script soma 1 a quantidadeAtual. Reinicia-se o processo até que a 
condição de quantidadeAtual < quantidadeTotal seja falsa (4 < 4 = F), ficando da seguinte forma:
0
00
000
0000 


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

// Desafio 2

let numASerAdivinhado = Number(prompt("Olá! Digite o número a ser adivinhado pelo seu adversário:"))
let i = 1
let sum = 0
console.log("Vamos jogar!!")
let numAdversario = Number(prompt("E aí? Qual o número que foi digitado pelo seu oponente?"))

while(numASerAdivinhado !== numAdversario) {
    
        if(numAdversario < numASerAdivinhado){
            numAdversario = Number(prompt("Béééé!! Você digitou " + numAdversario + ", logo, errou! É maior!"))

            
        }

        

        if(numAdversario > numASerAdivinhado){
            numAdversario = Number(prompt("Béééé!! Você digitou " + numAdversario + ", logo, errou! É menor!"))

            
        }

        sum ++
    
    }

    console.log("PARABÉNS! Você adivinhou o número. Você acertou após " + sum + " tentativas.")


// Desafio 3 - Ainda não concluído. Será enviado na reentrega após as 17h.

let numASerAdivinhado = Math.floor(Math.random() * 100);

let sum = 0
console.log("Vamos jogar!!")
let numAdversario = Number(prompt("E aí? Qual número eu, o computador, estou pensando?"))

while(numASerAdivinhado !== numAdversario) {
    
        if(numAdversario < numASerAdivinhado){
            numAdversario = Number(prompt("Béééé!! Você digitou " + numAdversario + ", logo, errou! É maior!"))

            
        }

        

        if(numAdversario > numASerAdivinhado){
            numAdversario = Number(prompt("Béééé!! Você digitou " + numAdversario + ", logo, errou! É menor!"))

            
        }

        sum ++
    
    }

    console.log("PARABÉNS! Você adivinhou o número. Você acertou após " + sum + " tentativas.")

    /* Sobre o Desafio 3:
    Estes desafios estão impressionantes, eu particularmente, nunca me senti tão motivado e focado em concluí-los. Sobre 
    o desafio 3, não foi difícil fazer a alteração, bastou eu tirar o prompt com a inserção do número a ser adivinhado, e
    colocar a propriedade Math.floor(Math.random() * 100). Pelo que entendi, math.floor faz o arredondamento dos valores,
    já que math.random() retorna valores decimais no intervalo [0,1[ (entre 0 inclusive e 1 exclusive). Com math.floor, 
    eu disse ao console que quero arredondar os valores de math.random() e multiplicá-los por 100, para que consiga números
    inteiros. Senti-me um vitorioso, hoje, ao conseguir concluir os exercícios e desafios propostos! */