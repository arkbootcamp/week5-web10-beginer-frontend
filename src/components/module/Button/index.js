import React from 'react'
import style from './button.module.css'

const Button = (props) => {
  return (
    <button className={`${style.btn} ${style[props.color]}`} onClick={props.fileEvent}>{props.title}</button>
  )
}
Button.defaultProps ={
  color:'primary'
}

export default Button
