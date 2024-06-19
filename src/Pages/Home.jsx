
import React from 'react'
import Button from '../Components/Button'
import BannerHomepage from '../Components/BannerHomepage'

const Home = () => {
  return (
    <>
    <div className='center'>
    <BannerHomepage
      imageLink={"https://www.rapp.com/media/4enbeiyi/home_banner3_dt_3200x1100.jpg"}
      title={"We are RAPP Worldwide"}
      subtitle={"A global precision marketing agency that knows how to speak to one individual, a million at a time."}
    />
    <Button text="Home" link="https://www.rapp.com/" />
    </div>
    </>
  )
}

export default Home
