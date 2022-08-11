import React from 'react'
import StyledCard from '../../styled-components/StyledCard'

const Card = ({children}) => {
  return (
    <StyledCard>
        {children}
    </StyledCard>
  )
}
export default Card
