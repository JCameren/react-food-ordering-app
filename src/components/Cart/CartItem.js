import React from 'react'
import StyledCartItem from './styledCartItem'
import StyledCartSummary from './styledCartSummary'
import StyledCartPrice from './styledCartPrice'
import StyledCartAmount from './styledCartAmount'
import StyledCartAction from './styledCartAction'

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
  return (
    <StyledCartItem as='li'>
        <div>
            <h2>{props.name}</h2>
            <StyledCartSummary>
                <StyledCartPrice as='span'>{price}</StyledCartPrice>
                <StyledCartAmount as='span'>x {props.amount}</StyledCartAmount>
            </StyledCartSummary>
        </div>
        <StyledCartAction>
            <button onClick={props.onRemove}>-</button>
            <button onClick={props.onAdd}>+</button>
        </StyledCartAction>

    </StyledCartItem>
  )
}

export default CartItem