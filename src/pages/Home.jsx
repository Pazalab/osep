import AboutSection from "../components/AboutSection"
import Achievements from "../components/Achievements"
import BlogSection from "../components/BlogSection"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import WholeNav from "../components/Navbar/WholeNav"
import Partners from "../components/Partners"
import ProjectsBody from "../components/ProjectsBody"
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
           <ProjectsBody />
           <BlogSection />
           <Partners />
           <CallToAction />
           <Footer />
    </>
  )
}

export default Home