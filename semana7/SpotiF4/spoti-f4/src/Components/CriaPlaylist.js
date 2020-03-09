import React from 'react'
// import Proptypes from 'prop-types'
import axios from 'axios'
// import StyledComponents from 'styled-components'
// import ItemMinhaPlaylist from './ItemMinhaPlaylist'

const BaseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"

const authToken = "string" //Objetivo aqui é evitar a repetição. Então, toda vez
//que houver necessidade de authToken, basta chamá-lo, sem previsar declará-lo
//novamente.





// Uma função que possibilitará a criação de uma Playlis, mas, devido a alteração de estado, transformaremos
// em uma class
class CriaPlaylist extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    mudancaNomePlaylist = (event) => {
        const novoNome = event.target.value
        this.setState({
            name: novoNome
        })
    }

    salvaNovaPlaylist = () => {
        const novaPlaylist = {
            name: this.state.name
        }

        const promessaDeNovaPlaylist = axios.post(`${BaseUrl}/playlists/createPlaylist`, novaPlaylist, {
            headers: {
                "auth":"Wesley",
                "Content-Type": "application/json"
            }
        })

        promessaDeNovaPlaylist.then(response => {
            alert("Que legal, sucesso ao criar essa playlist animal!")
        }).catch(error =>{
            alert("Ops! Infelizmente houve um erro na criação de sua playlist. Tente novamente!")
            console.log(error.response.data.message)
        })

    }

    render() {
        return(
            <div>
                <label name="nova-playlist">Nome da playlist: </label>
                <input type="text" 
                onChange={this.mudancaNomePlaylist} 
                value={this.state.name} 
                /> 
                <button onClick={this.salvaNovaPlaylist}>Criar Playlist</button>
            </div>
        )
    }
}

export default CriaPlaylist