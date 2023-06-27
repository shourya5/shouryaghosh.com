import Image from 'next/image'
import Link from 'next/link'

import Hero from './components/hero'
import Footer from './components/footer'
import Experience from './experience'
import Portfolio from './portfolio'
import ContactUs from './contact'
import About from './about'

export default function Home() {
  return (
    <div className='snap-y snap-mandatory'>
    <div className='snap-center'>
    <Hero />
    </div>
    {/* <div className="my-8 h-1 bg-gradient-linear"></div> */}
    <div className="divider"></div>
 
    <Experience id='experience'></Experience>
    
    <div className="divider"></div>
 
    <Portfolio></Portfolio>
  
    <div className="divider"></div> 
   
    <ContactUs></ContactUs>
  
    <div className="divider"></div> 
   
    <About></About>
  
    <Footer />
    </div>
  )
}
