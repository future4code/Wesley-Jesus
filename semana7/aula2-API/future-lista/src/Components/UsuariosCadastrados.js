import React from 'react'
import axios from 'axios'
import ItemUsuarioCadastrado from './ItemUsuarioCadastrado'

const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'

const mockUsuariosCadastrados = [
    {
        id: '0',
        name: "Wesley"
    },

    {
        id: '1',
        name: "Célia"
    }

]


class UsuariosCadastrados extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usuariosCadastrados: [],

        }
    }

    buscarUsuariosCadastrados = () => {
        const usuariosCadastradosPromessa = axios.get(`${baseUrl}/users/getAllUsers`, {
            headers: {
                'api-token': 'Wesley'
            }
        })

        usuariosCadastradosPromessa.then(response => {
            const usuariosCadastrados = response.data.result
            this.setState({ usuariosCadastrados: usuariosCadastrados })
        }).catch(error => {
            window.alert("Infelizmente não foi possível buscar a lista de usuários")
            this.setState({ usuariosCadastrados: [] })
        })
    }

    componentDidMount() {
        this.buscarUsuariosCadastrados()

    }

    apagarUsuario = (idUsuario) => {
        const apagarUsuarioPromessa = axios.delete(`${baseUrl}/users/deleteUser?id=${idUsuario}`, {
            headers: {
                'api-token': 'Wesley'
            }
        })

        apagarUsuarioPromessa.then((response) => {
            window.alert("Usuário apagado com sucesso!")
            this.buscarUsuariosCadastrados()
        }).catch((error) => {
            alert("Ocorreu um erro ao apagar usuário!")
            console.log(error.response.data.message)
            
        })

    }

    render() {    
        return(
            <ul>    
                {this.state.usuariosCadastrados.map(usuario => (
                    <ItemUsuarioCadastrado>{usuario.name} <span onClick={() => this.apagarUsuario(usuario.id)}> - x </span></ItemUsuarioCadastrado>
                ))}
            </ul>
        )
    }
}


export default UsuariosCadastrados 