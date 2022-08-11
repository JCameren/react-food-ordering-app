import React from 'react'
import Description from '../../../styled-components/Description'
import Meal from '../../../styled-components/Meal'
import Price from '../../../styled-components/Price'
import MealItemForm from './MealItemForm'

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
  return (
   <Meal>
    <div>
        <h3>{props.name}</h3>
        <Description>{props.description}</Description>
        <Price>{price}</Price>
    </div>
    <div>
      <MealItemForm  id={Math.random.toString()}/>
    </div>
   </Meal>
  )
}

export default MealItem