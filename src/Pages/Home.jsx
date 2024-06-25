import React, { useEffect, useState } from 'react';
import Button from '../Components/Button';
import BannerHomepage from '../Components/BannerHomepage';
import Layout from '../Components/Layout';

const Home = () => {
  const isMobile = window.innerWidth <= 425;
  const bannerLink = isMobile
    ? "https://www.rapp.com/media/fmcnnai5/home_banner2_mb_640x800.jpg"
    : "https://www.rapp.com/media/3wmfa1w5/home_banner2_dt_3200x1100.jpg";

  const [sections, setSections] = useState([]);

  useEffect(() => {
    const updatedSections = [
      {
        layoutType: 'layout1',
        imageLink: isMobile 
          ? 'https://www.rapp.com/media/z3kjlapx/home_showcase_about_mb_640x300.jpg' 
          : 'https://www.rapp.com/media/jg2pyic5/home_showcase_about_dt_3200x728.jpg',
        buttonText: 'FIND OUT WHY',
        buttonLink: '/about',
        title: 'We connect precision with empathy.',
        subtitle: 'ABOUT US',
        gradient: 'gradient1',
        className: 'first'
      },
      {
        layoutType: 'layout2',
        imageLink: isMobile 
          ? 'https://www.rapp.com/media/v5sh3dz4/showcase-mastercard_mobile.jpg' 
          : 'https://www.rapp.com/media/vcibj4be/showcase-mastercard_desktop.jpg',
        buttonText: 'CREATING CONNECTIONS',
        buttonLink: '/work',
        title: 'How we made Mastercard Priceless for a wider audience',
        subtitle: 'WORK',
        gradient: 'gradient2',
        className: 'second'
      },
      {
        layoutType: 'layout3',
        imageLink: isMobile 
          ? 'https://www.rapp.com/media/vmsc03ui/locations_mobile-2x.jpg' 
          : 'https://www.rapp.com/media/fq3pdkhz/microsoftteams-image.png',
        buttonText: 'Find Your Local RAPP',
        buttonLink: '/locations',
        title: 'We have offices all over the world',
        subtitle: 'LOCATIONS',
        gradient: 'gradient3',
        className: 'third'
      },
      {
        layoutType: 'layout1',
        imageLink: isMobile 
          ? 'https://www.rapp.com/media/1bgk4auc/home_showcase_careers_mb_640x300.jpg' 
          : 'https://www.rapp.com/media/rdin5qmt/showcase-image-4-large.jpg',
        buttonText: 'Work With Us',
        buttonLink: '/careers',
        title: 'Hello, is it you we`re looking for?',
        subtitle: 'CAREERS',
        gradient: 'gradient4',
        className: 'four'
      },
      {
        layoutType: 'layout2',
        imageLink: isMobile 
          ? 'https://www.rapp.com/media/3mydiqtw/home_showcase_news_mb_640x300.jpg' 
          : 'https://www.rapp.com/media/p2llbjtw/showcase-image-5-large.jpg',
        buttonText: 'Learn More',
        buttonLink: '/news',
        title: 'RAPP wins Campaign Global Campaign Agency of the Year!',
        subtitle: 'NEWS',
        gradient: 'gradient5',
        className: 'five'
      }
    ];
    setSections(updatedSections);
  }, [isMobile]);

  return (
    <>
      <div className='white'>
        <BannerHomepage
          imageLink={bannerLink}
          title={'We are RAPP Worldwide'}
          subtitle={"A global precision marketing agency that knows how to speak to one individual, a million at a time."}
        />
        <Button text="FIND OUT HOW" link="/about" />
      </div>
      <Layout sections={sections} />
    </>
  );
}

export default Home;