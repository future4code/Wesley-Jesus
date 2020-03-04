import React, { Components } from 'react'
import './App.css'
// import axios from 'axios'
// import PropTypes from 'prop-types'
import TelaCadastroUsuario from './Components/TelaCadastroUsuario'
import UsuariosCadastrados from './Components/UsuariosCadastrados'

const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'

//Criação da classe App que controlará a renderização condicional para exibir a tela de cadastro de usuários ou a tela de usuários cadastrados
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      telaAtual: 'telaDeCadastro'
    }
  }

//Essa aplicação será responsável por trocar de tela (Cadastro e Lista), sendo chamada ao clicar no botão para tal.
  trocarDeTela = () => {
      if(this.state.telaAtual === 'telaDeCadastro') {
        this.setState({telaAtual: 'telaListaCadastrados'})
      }
      else{
        this.setState({telaAtual:'telaDeCadastro'})    
    }
  }


  render() {
    //Aqui o botão que nos levará para as telas respectivas. Ternário para modificar o texto do botão, de acordo com a tela que está sendo mostrada 
    const botao = this.state.telaAtual === 'telaDeCadastro' ? 'Usuários Cadastrados' : 'Retornar ao cadastro'
    
    //Aqui o que será retornado na renderização 
    return (
      <div className="App">
        <header className="cabecalho-app">
          {/* Ao clicar no botão, o método trocarDeTela será chamado e, com isso, a tela será trocada */}
          <button className="troca-tela" onClick={this.trocarDeTela}>
          { botao }
          </button>
        </header>
        
        <hr/ >
        <section className="cadastro-ou-lista">
        {this.state.telaAtual === 'telaDeCadastro' ? <TelaCadastroUsuario /> : <UsuariosCadastrados />

        } 
        
        </section>
        

      </div>
    )
}
}

export default App
