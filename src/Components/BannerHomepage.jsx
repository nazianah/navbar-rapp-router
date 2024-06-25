import React from 'react'
import './BannerHomepage.css'
const BannerHomepage = ({ imageLink, title, subtitle }) => {
  return (
    <div className="banner-homepage">
      <img src={imageLink} alt="Banner" className="banner-image" />
      <div className="banner-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        </div>
        <div className='line'></div>
    </div>
  );
};

export default BannerHomepage;