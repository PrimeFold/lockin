import HeroSection from '../hero-section'
import Features from '../features'
import PricingSection from '../pricing'
import CurvedLoop from '../CurvedLoop'
import FooterSection from '../footer/page'
import GradualBlur from '../GradualBlur'


const Landing = () => {
  return (
    <div className="relative min-h-screen">
      {/* Dark base background with subtle gradient */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-black" />
      
      {/* Subtle blue accent orbs - matching brand color */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-40">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-lighten filter blur-[100px] animate-blob" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full mix-blend-lighten filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* Gradual blur effect at bottom of viewport */}
      <GradualBlur
        target="page"
        position="bottom"
        height="3rem"
        strength={3}
        divCount={6}
        curve="bezier"
        exponential={true}
        opacity={1}
      />

      <HeroSection/>
      <Features/>
      <PricingSection/>
      <section className='h-[200px] w-full dark:bg-transparent bg-transparent overflow-hidden pt-14 mt-10 relative'>
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
    </div>
  )
}

export default Landing