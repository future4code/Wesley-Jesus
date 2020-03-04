import React from 'react'
import axios from 'axios'

const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'


class TelaCadastroUsuario extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            todosOsCadastros: [],
            "name": "",
            "email": ""
        }
    }

    alterarNome = (event) => {
        const novaInfo = event.target.value
        this.setState({ name: novaInfo })
    }

    alterarEmail = (event) => {
        const novaInfo = event.target.value
        this.setState({ email: novaInfo })
    }

    salvarUsuario = () => {
        const novoUsuario = {
            name: this.state.name,
            email: this.state.email
        }

        const promessaNovoUsuario = axios.post(`${baseUrl}/users/createUser`, novoUsuario, {
            headers: {
                'api-token': 'Wesley',
            }
        })

        promessaNovoUsuario.then(response => {
            window.alert("Sucesso na criação do usuário!")
        }).catch(error => {
            window.alert("Hummm! Ocorreu algo de errado na criação do usuário!")
            console.log(error.response.data.message)
        })
    }

    render() {
        return(
            <div className="cadastro-usuario">
                <h2>Cadastro</h2> 
                <label className="nome-usuario">Nome: </label>
                <input type="text" placeholder="Insira seu nome" value={this.state.name} onChange={this.alterarNome}/><br />
                <label className="email-usuario">E-mail: </label>
                <input type="email" placeholder="Insira seu e-mail" value={this.state.email} onChange={this.alterarEmail}></input><br />
                <button onClick={this.salvarUsuario}>Salvar Usuário</button>
            </div>
        )
    }

}

export default TelaCadastroUsuario 