import HeroSection from '../hero-section'
import Features from '../features'
import PricingSection from '../pricing'
import CurvedLoop from '../CurvedLoop'
import FooterSection from '../footer/page'


const Landing = () => {
  return (
    <>
    <HeroSection/>
    <Features/>
    <PricingSection/>
    <section className='h-[200px] w-full dark:bg-transparent bg-white overflow-hidden pt-14 mt-10 relative'>
      <CurvedLoop 
        marqueeText="STAY FOCUSED  ✦  BLOCK DISTRACTIONS  ✦  ACHIEVE MORE ✦ " 
        speed={1.5}
        curveAmount={-100}
        direction="left"
        interactive={true}
        className="dark:fill-white fill-black"
      />
    </section>
    <FooterSection/>
    </>
  )
}

export default Landing