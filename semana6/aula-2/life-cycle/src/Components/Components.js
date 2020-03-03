import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


// const FormularioNovaTarefa = styled.div `
// display: flex;
// flex-wrap: wrap;
// `



class Components extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tarefa: ""
        }
    }

    aoClicarNoBotao = (tarefa) => {
        const novaTarefa = {
            id: new Date().getTime(),
            tarefa: tarefa,
        }

        const todasAsTarefas = [...this.state.tarefa]
        this.setState({ tarefa: todasAsTarefas })
    }


    render() {
    return (
        <div className="insercao-tarefa">
            <h1> Lista de Tarefas </h1>
            <input type="text" className="tarefa" placeholder="Tarefa" />
            <button onClick={this.aoClicarNoBotao}>Adicionar</button><br /><br />
            <label name="filter">Filtro: </label>
            <select id="filter">
                <option value="nenhum">Nenhuma</option>
                <option value="concluidas">Concluída(s)</option>
                <option value="pendentes">Pendente(s)</option>
            </select>
        </div>
    )
  }
}
  
  export default Components 