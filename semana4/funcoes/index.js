/* Respostas exercícios do dia 03-02

Primeira Parte - Exercícios de leitura de código
1. O primeiro código se trata de uma Arrow Function, que chamará esse array, conforme as condições dadas nos indicadores
e dentro da for. 
Declarada a constante minhaFuncao com valor quantidade com uma arrow function, na função, cria-se a constante array vazia,
pois ela será preenchida conforme as condições propostas em for. Para variável declarada i com valor 0, enquanto seu valor
for menor que a quantidade, será incrementado dois ao seu valor. Para variável declarada j com valor 0, enquanto seu valor
for menor que o valor de i, j terá um incrementado em seu valor. Durante esse para, enquanto valer as condições propostas,
será colocado no array, o valor de j, sendo tal array chamado abaixo, em return.

a. Para minhaFuncao(2), o resultado da função será [1]
b. Para minhaFuncao(5), o resultado da função será [1, 2, 3]
C. Para minhaFuncao(8), o resultado da função será [1, 2, 3, 4]

const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
            }
    }
    
    return array
	
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(5))
console.log(minhaFuncao(8))

2. Declarada uma variável arrayDeNomes com itens String (texto), cria-se uma arrow function atrelada a constante funcao,
em cuja serão atribuídos a lista constante no array e o nome a ser verificado. Dentro da constante funcao, criamos um
laço que diz o seguinte: Para a variável index (i) declarada com valor 0, enquanto seu valor for menor que o total 
de itens na lista, i terá incremento de 1, e fará o seguinte parâmetro: se o nome na lista for estritamente igual ao
nome a ser comparado, a função retornará o indexador desse nome, ou seja, sua posição no array.
a. No console, serão impressos as posições dos nomes que estão em destaque em cada log. Darvas está na posição 0, João está na
posição 2, Paula não consta no array; logo, haverá retorno do tipo de variável Paula, no caso, undefined. 

b. A função funcionaria normalmente, pois apesar de estarmos trabalhando com números, o array recebe normalmente os números em
suas respectivas posições e, ao imprimir a informação desejada no console, ele enviaria o indexador do número contido no 
array a ser verificado. Caso o número a ser identificado não estivesse no array, apareceria valro undefined também no console. 
let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === nome) {
            return i;
        }
    }
}

// console.log(funcao(arrayDeNomes, "Darvas"))
// console.log(funcao(arrayDeNomes, "João"))
// console.log(funcao(arrayDeNomes, "Paula"))




3. Definida a function metodo que trará um array, a função pegará as variáveis declaradas resultadoA, B e arrayFinal, e,
para variável x do array, fará cálculos diferentes e trará um resultado a x. ResultadoA será somado a x e ResultadoB será
multiplicado a x. Depois, será criada uma lista com os resultados e serão postos em arrayfinal. Para a funcion metodo(array)
daria o nome function criarNovoArray(array)

function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x;
      resultadoB *= x;
    }
  
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
    
    }

Exercícios de código  
*/

//4.
//a.
// let idadeCachorro = (a, b) => {
//     a = prompt("Digite a idade do cachorro:")
//     b = 7
//     let c = a*b
//     return c
// }
// alert("Considerando a idade digitada, a idade do cachorro é: " + idadeCachorro())
let idadeCachorro = (a, b) => {
    a = prompt("Digite uma idade:")
    b = 7
    let c = a*b
    return c
}
alert("Considerando a idade digitada, a idade do cachorro é: " + idadeCachorro())

//b.

// function concatenarInformacoesPessoais (nome, idade, endereco, souEstudante) {
// let nome = ""
// let idade = 0
// let endereco = ""
// let souEstudante = ""
// const mensagem = [""]

// }

// let concatenaDados = (nome, idade, endereco, souOuNaoEstudante) => {
//     if(souOuNaoEstudante === true){
//         souOuNaoEstudante = "sou"
//     }
//     else{
//         souOuNaoEstudante = "não sou"
//     }

//     return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e " + souOuNaoEstudante + " estudante."
// }

//alert(concatenaDados("Goli", 23, "Rua Guarapari, 190", false))

//5. 



let seculo = (ano) => {
      
        if((ano > 1000) && (ano <= 1100)){
            return "O ano " + ano + " é pertencente ao Século X. "            
        } 

        else if(ano > 1100 && ano <= 1200) {
            return "O ano " + ano + " é pertencente ao Século XI. "
        }
        
        else if(ano > 1200 && ano <= 1300) {
            return "O ano " + ano + " é pertencente ao Século XII. "
            
        }

        else if(ano > 1300 && ano <= 1400) {
            return "O ano " + ano + " é pertencente ao Século XIII. "
            
        }

        else if(ano > 1400 && ano <= 1500) {
            return "O ano " + ano + " é pertencente ao Século XIV. "
            
        }

        else if(ano > 1500 && ano <= 1600) {
            return "O ano " + ano + " é pertencente ao Século XV. "
            
        }

        else if(ano > 1600 && ano <= 1700) {
            return "O ano " + ano + " é pertencente ao Século XVI. "
            
        }

        else if(ano > 1600 && ano <= 1700) {
            return "O ano " + ano + " é pertencente ao Século XVII. "
            
        }

        else if(ano > 1700 && ano <= 1800) {
            return "O ano " + ano + " é pertencente ao Século XVIII. "
            
        }

        else if(ano > 1800 && ano <= 1900) {
            return "O ano " + ano + " é pertencente ao Século XIX. "
            
        }

        else if(ano > 1900 && ano <= 2000) {
            return "O ano " + ano + " é pertencente ao Século XI. "
            
        }

        else if(ano > 2000 && ano <= 2020) {
            return "O ano " + ano + " é pertencente ao Século XI. "
            
        }
    }

alert(seculo(1588))
