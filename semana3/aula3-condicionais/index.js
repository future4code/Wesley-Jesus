/*  
1. Ao rodar o código no console, o sistema abrirá um prompt para o usuário digitar o número a ser testado. Depois disso,
o comando indica ao console que o número enviado pelo usuário será transformado na constante número com valor number. Após
isso, o console testará o comando if conforme o número que o usuário digitou: se o número digitado, ao ser dividio por 2
tiver resto 0, será impressa no console a mensagem "Passou no teste". Se o condicional não der true, retornará "Não passou
no teste"

2.
a. O código criado serve para selecionar a fruta e o respectivo valor, conforme o nome da fruta digitado no prompt: há um
grupo de itens comutados e, para cada caso, o código exibirá uma fruta e seu respectivo valor.
b. O preço da fruta Maçã é R$ 2.25.
c. R$ 19.55
d. Ao retirar o break para o item desejado, no caso a Pêra, o console exibirá o valor que está abaixo, R$ 5, não o valor
a ser exibido, que é o de R$ 5.5.

3.
O Terminal exibirá uma mensagem de erro porque a variável mensagem foi criada dentro de um escopo e console.log está fora
deste escopo, no escopo pai, e o pai não consegue buscar as informações no escopo filho. A mensagem a ser exibida, depois
de o usuário digitar os números, deveria estar dentro do escopo filho, onde a variável mensagem foi criada.

*/

const num1 = prompt("Por favor, digite um número: ")
const num2 = prompt("Por favor, digite outro número: ")
const num3 = prompt("Por favor, digite outro número: ")

if(num1 > num2 && num1 > num3 && num2 > num3) {
    console.log("Números digitados em ordem decrescente: " + num1 + " " + num2 + " " + num3)
}

else if(num1 > num3 && num3 > num2) {
    console.log("Números digitados em ordem decrescente: " + num1 + " " + num3 + " " + num2)
}

else if(num3 > num2 && num3 > num1 && num2 > num1) {
    console.log("Números digitados em ordem decrescente: " + num3 + " " + num2 + " " + num1)
}

else if(num3 > num1 && num1 > num2) {
    console.log("Números digitados em ordem decrescente: " + num3 + " " + num1 + " " + num2)
}

else if(num2 > num3 && num2 > num1 && num3 > num1) {
    console.log("Números digitados em ordem decrescente: " + num2 + " " + num3 + " " + num1)
}

else if(num2 > num1 && num1 > num3) {
    console.log("Números digitados em ordem decrescente: " + num2 + " " + num1 + " " + num3)
}

/*Se eu digitar números iguais, o sistema retorna valor undefined no console e não informa se são iguais ou não, nem 
os dispõe no console, exceto se criar um else para tal situação, como este */
else {
    console.log("Atenção! Você digitou números iguais. Insira pelo menos um número diferente.")
} 

let ossos
let pelos
let racional
let pena
let terrestre
let ambAquatico

ossos = prompt("O animal possui estrutura óssea? [s/n]");
    if(ossos = "n"){
        console.log("Animal Invertebrado");
    }
    else {
        pelos = prompt("O animal tem pelo? [s/n]");
        if(pelos = "s") {
            racional = prompt("O animal é racional? [s/n]");
            if(racional = "s") {
                console.log("É um Ser Humano.")
            }
            else {
                console.log("É um mamífero não humano.");
            }
        }
        else {
            pena = prompt("O animal possui penas? [s/n]");
            if(pena = "s") {
                console.log("É uma Ave.");
            }
            else {
                terrestre = prompt("É um animal terrestre? [s/n]");
                if(terrestre = "s") {
                    ambAquatico = prompt("Parte de sua vida é em ambiente aquático? [s/n]");
                    if(ambAquatico = "s") {
                        console.log("É um animal Anfíbio.");
                    }
                    else {
                        console.log("É um Réptil");
                    }
                }
                else {
                    console.log("É um Peixe.");
                }
            }
        }
    }
