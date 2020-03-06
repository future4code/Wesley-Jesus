import React from 'react'
// import Proptypes from 'prop-types'
// import axios from 'axios'
// import StyledComponents from 'styled-components'

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api"

const authToken = "string" //Objetivo aqui é evitar a repetição. Então, toda vez
//que houver necessidade de authToken, basta chamá-lo, sem previsar declará-lo
//novamente.

class CriarPlaylist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }
}

const promessaCriacaoDePlaylist = axios.post(`${baseUrl}/playlists/createPlaylist`, CriarPlaylist, {
    headers: {
        auth: authToken,
    }
})

promessaCriacaoDePlaylist.then((response) => {
    console.log(response.data)
    

}).catch((error) => {
    console.log(error)
})

export default CriarPlaylist