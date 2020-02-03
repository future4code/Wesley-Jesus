

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



alert("PT-Alô você! Bem-vind@ ao jogo Blackjack / ES-Alô usted! Bienvenid@ al jugo Blackjack / EN-Hey there! Welcome to Blackjack.")
 
import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

if(confirm("Gostaria de iniciar um novo jogo?")){
   const nomeUsuario = prompt("Qual o seu nome ou como gostaria de ser chamado?") 
   const nomeUsuarioDois = "Computador"
   let i = 0
   let somaUsuario = 0
   let somaComputador = 0
   let cartaUsUm = [comprarCarta(), comprarCarta()]
   let cartaUsDois = [comprarCarta(), comprarCarta()]

   if(cartaUsUm[0].valor && cartaUsUm[1].valor || cartaUsDois[0].valor && cartaUsDois[1].valor === 11) {
      cartaUsUm = [comprarCarta(), comprarCarta()]
      cartaUsDois = [comprarCarta() , comprarCarta()]
   }

   console.log("As cartas do jogador " + nomeUsuario + " são: " + cartaUsUm[0].texto + " e " + cartaUsUm[1].texto + ".")
   console.log("A carta do " + nomeUsuarioDois + " revelada é: " + cartaUsDois[0].texto + ".")

   somaUsuario = cartaUsUm[0].valor + cartaUsUm[1].valor
   somaComputador = cartaUsDois[0].valor + cartaUsDois[1].valor
   i++ 

   while(somaUsuario <= 21){
      if(confirm("Suas cartas são: " + cartaUsUm[0].texto + " e " + cartaUsUm[1].texto + " A carta revelada do computador é " + "\n"  + cartaUsDois[0].texto + ". Deseja comprar mais uma carta?")){
         cartaUsUm.push(comprarCarta())
         somaUsuario += cartaUsUm[i].valor 
         cartaUsDois.push(comprarCarta())
         somaComputador += cartaUsDois[i].valor

         i++
         }
   }

         if(somaUsuario > 21 && somaComputador <= 21) {
            alert("O vencedor é o " + nomeUsuarioDois + " com " + somaComputador + " pontos.")
         }

         else if (somaComputador > 21 && somaUsuario <= 21) {
            alert("O vencedor é o " + nomeUsuario + " com " + somaUsuario + " pontos.")
         }

         else if(somaUsuario > somaComputador && somaUsuario <= 21){
            alert("O jogador " + nomeUsuario + " ganhou, fazendo " + somaUsuario + " versus " + somaComputador + " pontos do " + nomeUsuarioDois)
         }  

         else if(somaUsuario < somaComputador && somaComputador <= 21){
            alert("O " + nomeUsuarioDois + " ganhou, fazendo " + somaComputador + " versus " + somaUsuario + " pontos do " + nomeUsuario)
         }
      
         else {
            "Houve empate entre o " + nomeUsuarioDois + " e " + nomeUsuario
         } 
      
      }

else {
   alert("Você optou por não jogar BlackJack. Fim de jogo!")
}