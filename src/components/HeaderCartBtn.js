import React from 'react'
import { CartBtn } from '../styled-components/CartBtn'
import Icon from '/home/syogeki/udemy/food-ordering-app/src/styled-components/Icon.js'
import CartIcon from '/home/syogeki/udemy/food-ordering-app/src/components/CartIcon.js'
import Badge from '/home/syogeki/udemy/food-ordering-app/src/styled-components/Badge.js'
import { useContext } from 'react'
import CartContext from '../store/cart-context'



const HeaderCartBtn = (props) => {
const cartCtx = useContext(CartContext)

const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
  return currentNumber + item.amount
}, 0)

  return (
    <CartBtn onClick={props.onClick}>
       <Icon>
        <CartIcon />
       </Icon>
       <span>Your Cart</span>
       <Badge>{numberOfCartItems}</Badge>
    </CartBtn>
  )
}

export default HeaderCartBtn