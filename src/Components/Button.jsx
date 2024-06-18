import React from 'react'
import './Button.css'
const Button = ({ text, link }) => {
    return (
      <a href={link} style={{ textDecoration: 'none' }}>
        <button className='button'>{text}</button>
      </a>
    )
  }

export default Button