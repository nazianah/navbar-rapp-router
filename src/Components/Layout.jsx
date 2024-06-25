import React, { useState, useEffect } from 'react';
import Button from './Button';
import './Layout.css';

const Layout = ({ sections }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='layout-container'>
      {sections.map((section, index) => (
        <div className={`layout ${section.layoutType}`} key={index}>
          {section.layoutType === 'layout1' && (
            <div className='layout1'>
              <img src={section.imageLink} alt={section.title} className='layout-image' />
              <div className='layout-content1'>
                <p>{section.subtitle}</p>
                <h1>{section.title}</h1>
                
                <Button text={section.buttonText} link={section.buttonLink} className={section.className} />
              </div>
              <div className={`gradient ${section.gradient}`} style={{ height: `${(scrollPosition / window.innerHeight) * 60}%` }}>
               
              </div>
            </div>
          )}
          {section.layoutType === 'layout2' && (
            <div className='layout2'>
              <img src={section.imageLink} alt={section.title} className='layout-image' />
              <div className='layout-content2'>
                <p>{section.subtitle}</p>
                <h1>{section.title}</h1>
                
                <Button text={section.buttonText} link={section.buttonLink} className={section.className} />
              </div>
              <div className={`gradient ${section.gradient}`} style={{ height: `${(scrollPosition / window.innerHeight) * 40}%` }}>
               
              </div>
            </div>
          )}
          {section.layoutType === 'layout3' && (
            <div className='layout3'>
              <img src={section.imageLink} alt={section.title} className='layout-image' />
              <div className='layout-content3'>
                <p>{section.subtitle}</p>
                <h1>{section.title}</h1>
                
                <Button text={section.buttonText} link={section.buttonLink} className={section.className} />
              </div>
              <div className={`gradient ${section.gradient}`} style={{ height: `${(scrollPosition / window.innerHeight) * 30}%` }}>
               
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Layout;