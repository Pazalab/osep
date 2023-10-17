import { useEffect, useRef } from "react"
import { Slider } from "../utils/Slider"
import { heroStuff } from "../data/hero"
import { NavLink } from "react-router-dom"
import gsap from "gsap"
const HeroSection = () => {
     const sliderRef = useRef()
     
     useEffect(() => {
        new Slider(sliderRef.current);
     }, [])
  
  return (
    <div className="hero-section" ref={sliderRef}>
                { heroStuff.map(item => 
                     <div className="hero-slide-moja" key={item.id}>
                           <div className="inner-row">
                                      <div className="hero-slide-texts">
                                                  <div className="slide-texts-inner">
                                                             <h1>{item.title}</h1>
                                                             <p>{item.description}</p>

                                                             <div className="action-btn">
                                                                     <NavLink to={'/'}>Get Involved</NavLink>
                                                             </div>
                                                  </div>
                                      </div>
                           </div>
                </div>
                )}
    </div>
  )
}

export default HeroSection