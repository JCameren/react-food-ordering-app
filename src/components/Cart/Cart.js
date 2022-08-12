import React from 'react'
import CartItems from './StyledCartItems'
import Total from './StyledTotal'
import Actions from './Actions'
import AltBtn from './AltBtn'
import Modal from '../../Modal/Modal'

const Cart = (props) => {
  const cartItems = <CartItems>{[
    { id: 'c1',
     name: 'Sushi',
      amount: 2,
       price: 12.99 
    }].map((item) => <li>{item.name}</li>)}</CartItems>
  return (
    <Modal onClick={props.onCloseCart}>
      {cartItems}
      <Total>
        <span>Total Amount</span>
        <span>35.62</span>
      </Total>
      <Actions>
        <AltBtn onClick={props.onCloseCart}>Close</AltBtn>
        <AltBtn>Order</AltBtn>
      </Actions>
    </Modal>
  )
}

export default Cart