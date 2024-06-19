import React from 'react';
import './Button.css';

const Button = ({ text, link, style, className }) => {
  return (
    <a href={link} style={{ textDecoration: 'none', ...style }}>
      <button className={`button ${className}`}>{text}</button>
    </a>
  );
}

export default Button;