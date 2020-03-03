import React, { Components } from 'react'
import './App.css'
//import axios from 'axios'
import PropTypes from 'prop-types'
import './Botao.js'
import TelaCadastroUsuario from './Components/TelaCadastroUsuario'
import UsuariosCadastrados from './Components/UsuariosCadastrados'

const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'
const auth = "string"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      telaAtual: <TelaCadastroUsuario />
    }
  }

  trocarDePagina = () => {
    if(this.state.telaAtual === <TelaCadastroUsuario />) {
      this.setState({telaAtual: <UsuariosCadastrados />})
    }
  }

  render() {
  return (
    <div className="App">
      <header className="cabecalho-app">
        <button onClick={this.trocarDePagina()}>
        Teste
        </button>
      </header>
      
      <hr/ >
      <section className="cadastro-ou-lista">
      <TelaCadastroUsuario />
      </section>
      

    </div>
  )
}
}

export default App
