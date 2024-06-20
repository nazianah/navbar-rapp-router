import React from 'react';
import Button from './Button';
import './Layout.css';

const Layout = ({ sections }) => {
  return (
    <div className='layout-container'>
      {sections.map((section, index) => (
        <div className={`layout ${section.layoutType}`} key={index}>
          {section.layoutType === 'layout1' && (
            <div className='layout1'>
              <img src={section.imageLink} alt={section.title} className='layout-image' />
              <div className='layout-content'>
                <p>{section.subtitle}</p>
                <h1>{section.title}</h1>
                
                <Button text={section.buttonText} link={section.buttonLink} className={section.className} />
              </div>
            </div>
          )}
          {section.layoutType === 'layout2' && (
            <div className='layout2'>
              <img src={section.imageLink} alt={section.title} className='layout-image' />
              <div className='layout-content'>
                <p>{section.subtitle}</p>
                <h1>{section.title}</h1>
                
                <Button text={section.buttonText} link={section.buttonLink} className={section.className} />
              </div>
            </div>
          )}
          {section.layoutType === 'layout3' && (
            <div className='layout3'>
              <img src={section.imageLink} alt={section.title} className='layout-image' />
              <div className='layout-content'>
                <p>{section.subtitle}</p>
                <h1>{section.title}</h1>
                
                <Button text={section.buttonText} link={section.buttonLink} className={section.className} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Layout;