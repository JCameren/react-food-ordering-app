import React from 'react'
import Form from '../../../styled-components/Form'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
  return (
   <Form>
    <Input label='Amount'  id={props.id} input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
    }}/>
    <button>+ Add</button>
   </Form>
  )
}

export default MealItemForm