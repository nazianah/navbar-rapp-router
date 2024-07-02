import React from 'react'
import BannerHomepage from '../Components/BannerHomepage'
import Accordion from '../Components/Accordion';
import items from '../Data/Accordion.json'

const About = () => {
  const isMobile = window.innerWidth <= 450;

  const { banner } = items;

  const bannerLink = isMobile ? banner.mobileImageLink : banner.desktopImageLink;

  return (
    <>
     <div className='center'>
     <BannerHomepage
          imageLink={bannerLink}
          title={banner.title}
          subtitle={banner.subtitle}
        />
    </div>
    <Accordion items={items.items} />
    </>
  )
}

export default About