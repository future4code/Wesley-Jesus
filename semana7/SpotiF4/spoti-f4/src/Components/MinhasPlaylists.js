import React from 'react'
// import Proptypes from 'prop-types'
import axios from 'axios'
// import StyledComponents from 'styled-components'
import ItemMinhaPlaylist from './ItemMinhaPlaylist'

const BaseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"

const authToken = "string" //Objetivo aqui é evitar a repetição. Então, toda vez
//que houver necessidade de authToken, basta chamá-lo, sem previsar declará-lo
//novamente.

const lists = []

class MinhasPlaylists extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            listaDePlaylists: [],
        }
    }

    componentDidMount() {
        const listaDePlaylistsPromessa = axios.get(`${BaseUrl}/playlists/getAllPlaylists`, {
            headers: {
                'auth': "Wesley", 
                'Content-Type': "application/json"
            }
        })

        listaDePlaylistsPromessa.then(response => {
            const listaDePlaylists = response.data.result
            
            this.setState({
                listaDePlaylists:listaDePlaylists
            })
        }).catch(error => {
            window.alert("Não foi possível localizar a lista de suas playlists!")
            // console.log(error.response.data.message)
        })
    }

    render() {
        return (
            <ul>
                {this.state.listaDePlaylists.map(playlist => (
                    <ItemMinhaPlaylist> { playlist.name } <span> X </span></ItemMinhaPlaylist>
                ))}
            </ul>
        )
    }
    
}

export default MinhasPlaylists 