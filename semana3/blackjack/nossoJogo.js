 import comprarCarta from './naoMexer.js'
 // NÃO REMOVA ESTA LINHA


 alert("PT-Alô você! Bem-vin@ ao jogo Blackjack / ES-Alô usted! Bienvenid@ al jugo Blackjack / EN-Hey there! Welcome to Blackjack.")
 


 if(confirm("Gostaria de iniciar um novo jogo?")){
   const nomeUsuario = prompt("Qual o seu nome ou qual o nome gostaria de ser chamado?") 
   let cartaUmUsuarioUm = comprarCarta()
   let cartaDoisUsuarioUm = comprarCarta()
   
   

   const nomeUsuarioDois = "Computador" 
   let cartaUmUsuarioDois = comprarCarta()
   let cartaDoisUsuarioDois = comprarCarta()
 
   if(cartaUmUsuarioUm.valor+cartaDoisUsuarioUm.valor > cartaUmUsuarioDois.valor+cartaDoisUsuarioDois.valor){
      console.log("As cartas do jogador " + nomeUsuario + " são:" + cartaUmUsuarioUm.texto + " " + cartaDoisUsuarioUm.texto +  " - Pontuação: " + (cartaUmUsuarioUm.valor+cartaDoisUsuarioUm.valor))
      console.log("As cartas do jogador " + nomeUsuarioDois + " são:" + cartaUmUsuarioDois.texto + " " + cartaDoisUsuarioDois.texto +  " - Pontuação: " + (cartaUmUsuarioDois.valor+cartaDoisUsuarioDois.valor))
      alert("Parabéns! O vencedor é " + nomeUsuario)
   }

   else if(cartaUmUsuarioUm.valor+cartaDoisUsuarioUm.valor < cartaUmUsuarioDois.valor+cartaDoisUsuarioDois.valor){
      console.log("As cartas do jogador " + nomeUsuario + " são:" + cartaUmUsuarioUm.texto + " " + cartaDoisUsuarioUm.texto +  " - Pontuação: " + (cartaUmUsuarioUm.valor+cartaDoisUsuarioUm.valor))
      console.log("As cartas do jogador " + nomeUsuarioDois + " são:" + cartaUmUsuarioDois.texto + " " + cartaDoisUsuarioDois.texto +  " - Pontuação: " + (cartaUmUsuarioDois.valor+cartaDoisUsuarioDois.valor))
      alert("Parabéns! O vencedor é " + nomeUsuarioDois)
   }

   else {
      console.log("As cartas do jogador " + nomeUsuario + " são:" + cartaUmUsuarioUm.texto + " " + cartaDoisUsuarioUm.texto +  " - Pontuação: " + (cartaUmUsuarioUm.valor+cartaDoisUsuarioUm.valor))
      console.log("As cartas do jogador " + nomeUsuarioDois + " são:" + cartaUmUsuarioDois.texto + " " + cartaDoisUsuarioDois.texto +  " - Pontuação: " + (cartaUmUsuarioDois.valor+cartaDoisUsuarioDois.valor))
      alert("Houve um empate entre " + nomeUsuario + " e " + nomeUsuarioDois)
   }


}

   else{
     console.log("Fim de jogo.")
  }
