
import React from 'react'
import Button from '../Components/Button'
import BannerHomepage from '../Components/BannerHomepage'
import Layout from '../Components/Layout'
const Home = () => {
  return (
    <>
    <div className='white'>
    <BannerHomepage
      imageLink={"https://www.rapp.com/media/k1qcbewy/home_banner5_dt_3200x1100.jpg"}
      title={"We are RAPP Worldwide"}
      subtitle={"A global precision marketing agency that knows how to speak to one individual, a million at a time."}
    />
    <Button text="FIND OUT HOW" link="/about" />
    </div>
    <Layout
        layoutType='layout1'
        imageLink='https://www.rapp.com/media/jg2pyic5/home_showcase_about_dt_3200x728.jpg'
        buttonText='About'
        buttonLink='/about'
        title='We connect precision with empathy.'
        subtitle='About'
      />
      <Layout
        layoutType='layout2'
        imageLink='https://www.rapp.com/media/m4omjgkj/showcase-mastercard_desktop-1x.jpg'
        buttonText='CREATING LINKS'
        buttonLink='/work'
        title='How we made Mastercard Priceless for a wider audience'
        subtitle='Work'
      />
       <Layout
        layoutType='layout3'
        imageLink='https://www.rapp.com/media/tctiv2gj/showcase-image-3.jpg'
        buttonText='CREATING LINKS'
        buttonLink='/locations'
        title='We have offices all over the world'
        subtitle='Locations'
      />
    </>
  )
}

export default Home