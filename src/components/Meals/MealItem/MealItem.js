import React from 'react'
import Description from '../../../styled-components/Description'
import Meal from '../../../styled-components/Meal'
import Price from '../../../styled-components/Price'
import MealItemForm from './MealItemForm'
import { useContext } from 'react'
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      })
    } 
  return (
   <Meal>
    <div>
        <h3>{props.name}</h3>
        <Description>{props.description}</Description>
        <Price>{price}</Price>
    </div>
    <div>
      <MealItemForm  onAddToCart={addToCartHandler}/>
    </div>
   </Meal>
  )
}

export default MealItem