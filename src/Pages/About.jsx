import React from 'react'
import Button from '../Components/Button'
import BannerHomepage from '../Components/BannerHomepage'
const About = () => {
  return (
    <>
     <div className='center'>
     <BannerHomepage
      imageLink={"https://www.rapp.com/media/32gpt0lb/about_banner_dt_3200x1100.jpg"}
      title={"We connect precision with empathy"}
      subtitle={"Brands are challenged now more than ever to connect customers and deliver bottom-line value for their business. We are world leaders at activating growth with precision and empathy at scale: which means we help our clients turn data into personalized experiences that move individuals to action."}
    />
    <Button text="About" link="https://www.rapp.com/about/"/>
    </div>
    </>
  )
}

export default About