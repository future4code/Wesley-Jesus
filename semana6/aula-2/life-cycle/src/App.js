import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './App.css';
import Components from './Components/Components'
import Lists from './Components/Lists/Lists'

const Lista = styled.ul`
list-style-type: none;
`

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="App">
        <Components />
        <hr />
        <Lista>
          <Lists />
        </Lista>
      </div>
    );
  }
  
}

export default App
