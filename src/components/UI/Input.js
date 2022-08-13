import React from 'react'
import StyledInput from '../../styled-components/StyledInput'

const Input = React.forwardRef ((props, ref) => {
  return (
    <StyledInput>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input}/>
    </StyledInput>
  )
})

export default Input