import React from 'react'
import Button from '../Components/Button'
import BannerHomepage from '../Components/BannerHomepage'
import Accordion from '../Components/Accordion';


const items = [
  {
    title: 'Datify: how to harness the power of first party data',
    content: 'Our connected data solution is three simple steps to harnessing the power of data and putting the precision and empathy back into marketing. We build a plan that connects your brand ambitions with the possibilities in your data. We create a platform that connects the right data with the marketing teams who need it. We power up your data by enriching, enhancing and augmenting it with our unparalleled modelling firepower for competitive edge. And, through it all, you can be confident that data privacy and security underpins everything we do. We help you go beyond compliancy and embrace the ethics required, while still unlocking valuable customer data.',
    button: {
      text: 'Learn more',
      link: 'https://www.rapp.com/about/digital-trust/'
    }
  },
  {
    title: 'Maestro: how to create next best experiences for every individual consumer',
    content: 'Our connected decisioning solution combines human and machine to prioritize and optimize marketing spend for maximum impact. We create a unified customer journey that serves as the single, customer-centric source of truth in your organization. We categorize and score the value of every action a customer can take. We measure the impact of marketing interventions on driving those actions and create the business rules that drive automated marketing decisions.'
  },
  {
    title: 'Artbot: how to produce and optimize marketing content at scale',
    content: 'Our connected content solution is the modern way to produce and optimize marketing content at scale. We create an atomic design system flexible enough to allow creativity to flourish and structured enough to be delivered (at least in part) by AI in any channel without breaking your brand. We build content production processes that reduce the cost of content to close to $0 and increase the speed to market exponentially. And we leverage the latest gen AI alongside our human creatives to expand the possibilities for your brand.'
  },
 
];
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
    <Accordion items={items} />
    </>
  )
}

export default About;




