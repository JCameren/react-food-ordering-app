import React from 'react'
import StyledInput from '../../styled-components/StyledInput'

const Input = (props) => {
  return (
    <StyledInput>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}/>
    </StyledInput>
  )
}

export default Input