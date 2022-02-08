/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Input.css'

export default props => {
  const { name, placeholder, className, onChange, value} = props
  return (
    <input type="text" className={className} name={name} onChange={onChange} value={value} placeholder={placeholder}></input>
  )
}