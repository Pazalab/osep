import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import WholeNav from "../components/Navbar/WholeNav"
import '../css/home.css'
const Home = () => {
  return (
    <>
           <WholeNav />
           <HeroSection />
           <AboutSection />
    </>
  )
}

export default Home