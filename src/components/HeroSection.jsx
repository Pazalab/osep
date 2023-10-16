import { useEffect, useRef } from "react"
import { Slider } from "../utils/Slider"
import { heroStuff } from "../data/hero"
const HeroSection = () => {
     const sliderRef = useRef()
     
     useEffect(() => {
        const sliderInit = new Slider(sliderRef.current);
       
     }, [])
  
  return (
    <div className="hero-section" ref={sliderRef}>
                { heroStuff.map(item => 
                     <div className="hero-slide-moja" key={item.id}>
                           <div className="inner-row">
                                      <div className="hero-slide-texts">
                                                  <div className="slide-texts-inner">
                                                             <h3>{item.semi_title}</h3>
                                                             <h1>{item.title}</h1>
                                                             <p>{item.description}</p>
                                                  </div>
                                      </div>
                           </div>
                </div>
                )}
    </div>
  )
}

export default HeroSection