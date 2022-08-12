import React from 'react'
import { Backdrop } from './styledBackdrop'
import StyledModal from './StyledModal'
import ReactDOM from 'react-dom'


const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
    {ReactDOM.createPortal(<StyledModal>{props.children}</StyledModal>, portalElement)}
    </>

  )
}

export default Modal