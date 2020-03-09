import React from 'react'
// import Proptypes from 'prop-types'
// import axios from 'axios'
// import styled from 'styled-components'
import './App.css'
import CriaPlaylist from './Components/CriaPlaylist'
import MinhasPlaylists from './Components/MinhasPlaylists'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      telaAtual: <CriaPlaylist />

    }
  }

  mudancaParaTelaCriacaoPlaylist = () => {
    this.setState({telaAtual: <CriaPlaylist />})
  
  }

  mudancaTelaCriacaoPlayParaMinhasPlaylists = () => {
    this.setState({telaAtual: <MinhasPlaylists />})
  
  }

  mudancaTelaCriacaoPlayParaNovaMusica = () => {
    this.setState({telaAtual: 'nova-musica'})
  
  }

  render() {
    return (
      <div>
        <header>
          <section>
            <h2>::Spoti-F4 - A sua nova plataforma de música online.::</h2>
          </section>
          <nav>
            <button 
            className="botoes"
            id="volta-nova-playlist" 
            onClick={this.mudancaParaTelaCriacaoPlaylist}>Adicionar Playlist</button>

            <button 
            className="botoes"
            id="minhas-plays" 
            onClick={this.mudancaTelaCriacaoPlayParaMinhasPlaylists}>Minhas Playlists</button>

            <button 
            className="botoes"
            id="minhas-plays" 
            onClick={this.mudancaTelaCriacaoPlayParaNovaMusica}>Adicionar Nova Música à Playlist</button>
          </nav>
        </header>
        <main>
          <hr />
          {this.state.telaAtual}
        </main>
      </div>
    )
  }
  
}

export default App
