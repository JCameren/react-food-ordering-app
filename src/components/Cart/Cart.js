import React, { useContext } from 'react'
import CartItems from './StyledCartItems'
import Total from './StyledTotal'
import Actions from './Actions'
import AltBtn from './AltBtn'
import Modal from '../../Modal/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems =  cartCtx.items.length > 0

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount: 1})
  }

  const cartItems = 
    <CartItems>
    {cartCtx.items.map((item) =>
     <CartItem 
     key={item.id} 
     name={item.name} 
     amount={item.amount} 
     price={item.price} 
     onRemove={cartItemRemoveHandler.bind(null, item.id)} 
     onAdd={cartItemAddHandler.bind(null, item)}/>)}
    </CartItems>
    return (

    <Modal onClick={props.onCloseCart}>
      {cartItems}
      <Total>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </Total>
      <Actions>
        <AltBtn onClick={props.onCloseCart}>Close</AltBtn>
        { hasItems &&<AltBtn>Order</AltBtn>}
      </Actions>
    </Modal>
  )
}

export default Cart