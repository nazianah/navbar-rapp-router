import React, { useEffect, useState } from 'react';
import Button from '../Components/Button';
import BannerHomepage from '../Components/BannerHomepage';
import Layout from '../Components/Layout';
import homeData from '../Data/homeData.json';

const Home = () => {
  const isMobile = window.innerWidth <= 450;

  const { banner, sections } = homeData;

  const bannerLink = isMobile ? banner.mobileImageLink : banner.desktopImageLink;

  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    setSectionData(sections.map(section => ({
      ...section,
      imageLink: isMobile ? section.imageLinkMobile : section.imageLinkDesktop
    })));
  }, [isMobile, sections]);

  return (
    <>
      <div className='white'>
        <BannerHomepage
          imageLink={bannerLink}
          title={banner.title}
          subtitle={banner.subtitle}
        />
       <Button text="FIND OUT HOW" link="/about" />
      </div>
      <Layout sections={sectionData} />
    </>
  );
}

export default Home;