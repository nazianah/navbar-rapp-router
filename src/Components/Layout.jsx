import React from 'react';
import Button from './Button';
import './Layout.css';


const Layout = [
  {
    layoutType: 'layout1',
    imageLink: 'https://www.rapp.com/media/jg2pyic5/home_showcase_about_dt_3200x728.jpg',
    buttonText: 'About',
    buttonLink: '/about',
    title: 'We connect precision with empathy.',
    subtitle: 'About'
  },
  {
    layoutType: 'layout2',
    imageLink: 'https://www.rapp.com/media/m4omjgkj/showcase-mastercard_desktop-1x.jpg',
    buttonText: 'CREATING LINKS',
    buttonLink: '/work',
    title: 'How we made Mastercard Priceless for a wider audience',
    subtitle: 'Work'
  },
  {
    layoutType: 'layout3',
    imageLink: 'https://www.rapp.com/media/tctiv2gj/showcase-image-3.jpg',
    buttonText: 'CREATING LINKS',
    buttonLink: '/locations',
    title: 'We have offices all over the world',
    subtitle: 'Locations'
  }
];

// const Layout = ({ layoutType, imageLink, buttonText, buttonLink, title, subtitle }) => {
//   return (
//     <div className={`layout ${layoutType}`}>
//       {layoutType === 'layout1' && (
//         <div className='layout1'>
//           <img src={imageLink} alt={title} className='layout-image' />
//           <div className='layout-content'>
//             <p>{subtitle}</p>
//             <h2>{title}</h2>
            
//             <Button text={buttonText} link={buttonLink} className='primary' />
//           </div>
//         </div>
//       )}
//       {layoutType === 'layout2' && (
//         <div className='layout2'>
//           <div className='layout-content'>
//             <p>{subtitle}</p>
//             <h2>{title}</h2>
            
//             <Button text={buttonText} link={buttonLink} className='primary' />
//           </div>
//           <img src={imageLink} alt={title} className='layout-image' />
//         </div>
//       )}
//       {layoutType === 'layout3' && (
//         <div className='layout3'>
//           <div className='layout-content'>
//             <p>{subtitle}</p>
//             <h2>{title}</h2>
            
//             <Button text={buttonText} link={buttonLink} className='primary' />
//           </div>
//           <img src={imageLink} alt={title} className='layout-image' />
//         </div>
//       )}
//     </div>
//   );
// }

export default Layout;