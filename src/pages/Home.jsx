import AboutSection from "../components/AboutSection"
import Achievements from "../components/Achievements"
import HeroSection from "../components/HeroSection"
import WholeNav from "../components/Navbar/WholeNav"
import WhatWeDo from "../components/WhatWeDo"
import '../css/home.css'
const Home = () => {
  return (
    <>
           <WholeNav />
           <HeroSection />
           <AboutSection />
           <Achievements />
           <WhatWeDo />
    </>
  )
}

export default Home