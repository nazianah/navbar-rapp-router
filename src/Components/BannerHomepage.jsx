import React, { useState, useEffect } from 'react';

import './BannerHomepage.css'
const BannerHomepage = ({ sections }) => {
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
  const BannerHomepage = ({ imageLink, title, subtitle }) => {
    return (
      <div className="banner-homepage">
        <img src={imageLink} alt="Banner" className="banner-image" />
        <div className="banner-text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className={`gradient ${section.gradient}`} style={{ height: `${(scrollPosition / window.innerHeight) * 50}%` }}>
               
        </div>
          
      </div>
    );
  };
}

export default BannerHomepage;