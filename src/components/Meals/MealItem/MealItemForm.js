import React, { useRef, useState } from 'react'
import Form from '../../../styled-components/Form'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
  const [amountIsValid, setAmountisValid] = useState(true)

  const amountInputRef = useRef()

  const submitHandler = event => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (
      enteredAmount.trim().length === 0 || 
      enteredAmountNumber < 1 || 
      enteredAmountNumber > 5
    ) {
      setAmountisValid(false)
      return
    }

    props.onAddToCart(enteredAmountNumber)
  }
  return (
   <Form onSubmit={submitHandler}>
    <Input 
        
        ref={amountInputRef}
        label='Amount'  
        id={props.id} input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
    }}/>
    <button>+ Add</button>
    {!amountIsValid && <p>Please enter a valid amount (1-5) </p>}
   </Form>
  )
}

export default MealItemForm