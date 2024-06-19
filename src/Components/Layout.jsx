import React from 'react';
import Button from './Button';
import './Layout.css';

const Layout = ({ layoutType, imageLink, buttonText, buttonLink, title, subtitle }) => {
  return (
    <div className={`layout ${layoutType}`}>
      {layoutType === 'layout1' && (
        <div className='layout1'>
          <img src={imageLink} alt={title} className='layout-image' />
          <div className='layout-content'>
            <p>{subtitle}</p>
            <h2>{title}</h2>
            
            <Button text={buttonText} link={buttonLink} className='primary' />
          </div>
        </div>
      )}
      {layoutType === 'layout2' && (
        <div className='layout2'>
          <div className='layout-content'>
            <p>{subtitle}</p>
            <h2>{title}</h2>
            
            <Button text={buttonText} link={buttonLink} className='primary' />
          </div>
          <img src={imageLink} alt={title} className='layout-image' />
        </div>
      )}
      {layoutType === 'layout3' && (
        <div className='layout3'>
          <div className='layout-content'>
            <p>{subtitle}</p>
            <h2>{title}</h2>
            
            <Button text={buttonText} link={buttonLink} className='primary' />
          </div>
          <img src={imageLink} alt={title} className='layout-image' />
        </div>
      )}
    </div>
  );
}

export default Layout;