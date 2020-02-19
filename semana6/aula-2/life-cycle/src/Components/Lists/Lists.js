import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'




class Lists extends React.Component {
    constructor(props) {
        super(props)
            this.state = ""
        }
    
    render() {
        return (
            <div className="Lists">
                <li>{this.state.tarefa}</li>
            </div>
          )
    }
    
  }
  
  export default Lists 