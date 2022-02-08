/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Button.css'

export default props => {
  const {name, className, onClick } = props
  return (
    <button  name={name} className={className} onClick={onClick}>{props.label} </button>
  )
}

  
  