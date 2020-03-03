import React from 'react'
//import axios from 'axios'

const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'
const auth = "wesley"

class UsuariosCadastrados extends React.Component {
    constructor () {
        super()
        this.state = {

        }
    }



    render() {
        return(
            <div className="lista-cadastrados">
                <h2>Usuários cadastrados</h2> 
                <ul>
                    <li>Cadastrado1<button>Apagar</button></li>
                </ul>
            </div>
        )
    }

}

export default UsuariosCadastrados 