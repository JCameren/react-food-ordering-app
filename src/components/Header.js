import React from 'react'
import { HeroImg } from '../styled-components/HeroImg'
import { StyledHeader } from '../styled-components/StyledHeader'
import HeaderCartBtn from './HeaderCartBtn'
import banner from '/home/syogeki/udemy/food-ordering-app/src/assets/meals.jpg'

export const Header = (props) => {
  return (
    <>
    <StyledHeader>
    <h1>Food Ordering App</h1>
    {/* <button>Cart</button> */}
    <HeaderCartBtn  onClick={props.onShowCart}/>
    </StyledHeader>
    <HeroImg>
        <img src={banner} alt='hero banner of buffet'/>
    </HeroImg>
    </>
  )
    
  
}
