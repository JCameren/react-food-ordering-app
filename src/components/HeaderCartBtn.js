import React from 'react'
import { CartBtn } from '../styled-components/CartBtn'
import Icon from '/home/syogeki/udemy/food-ordering-app/src/styled-components/Icon.js'
import CartIcon from '/home/syogeki/udemy/food-ordering-app/src/components/CartIcon.js'
import Badge from '/home/syogeki/udemy/food-ordering-app/src/styled-components/Badge.js'



const HeaderCartBtn = (props) => {
  return (
    <CartBtn>
       <Icon>
        <CartIcon />
       </Icon>
       <span>Your Cart</span>
       <Badge>3</Badge>
    </CartBtn>
  )
}

export default HeaderCartBtn