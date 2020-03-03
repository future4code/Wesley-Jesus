import React from 'react'
//import axios from 'axios'

const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'
const auth = "wesley"

class TelaCadastroUsuario extends React.Component {
    constructor () {
        super()
        this.state = {
            todosOsCadastros: [],
            "name": "",
            "email": ""
        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="cadastro-usuario">
                <h2>Cadastro</h2> 
                <label className="nome-usuario">Nome: </label>
                <input type="text" placeholder="Insira seu nome"></input><br />
                <label className="email-usuario">E-mail: </label>
                <input type="text" placeholder="Insira seu e-mail"></input><br />
                <button>Salvar</button>
            </div>
        )
    }

}

export default TelaCadastroUsuario 