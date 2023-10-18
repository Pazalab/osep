import reforestation from "../assets/reforestation.png"
import env_analysis from "../assets/env-research.png"
import conservation from "../assets/forest-conservation.png"
import global from "../assets/global.png"
import { NavLink } from "react-router-dom"
import future from "../assets/future.jpg"
import research from "../assets/research.jpg"
import together from "../assets/together.jpg"
const data = [
    {
        id: 0,
        image: reforestation,
        title: 'Tree Planting & Reforestation'
    },
    {
        id: 1,
        image: env_analysis,
        title: 'Environment Analysis & Research'
    },
    {
        id: 2,
        image: conservation,
        title: 'Forest Conservation'
    },
    {
        id: 3,
        image: global,
        title: 'Global Environmental Goals'
    },
]
const AboutSection = () => {
  return (
    <div className="about-section">
            <div className="inner-row">
                         <div className="pillars-section">
                                      { data.map(item => 
                                        <div className="pillar-moja" key={item.id}>
                                                  <img src={item.image} alt="" />
                                                  <h3>{item.title}</h3>
                                      </div>
                                        )}
                         </div>

                         <div className="about-intro-part">
                                    <h3>Who we are</h3>
                                    <div className="about-intro-row">
                                                  <div className="about-intro-column">
                                                           <h1>More People, <br /> More Impact</h1>
                                                  </div>
                                                  <div className="about-intro-column">
                                                          <p>Osep Kenya is a reputable CBO founded on a passion and commitment to create a sustainable future for our planet. We believe that through collective action, we can make a positive impact on the environment and create a more just and equitable world for all.</p>
                                                  </div>
                                                  <div className="about-intro-column">
                                                          <NavLink to={'/about-us'}>Read More</NavLink>
                                                  </div>
                                    </div>
                         </div>

                         <div className="about-more-description">
                                     <div className="about-more-moja">
                                                  <img src={future} alt="" />
                                                 <div className="about-more-texts">
                                                          <h4>Securing the Future</h4>
                                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis, dolores quidem nam harum sint consequuntur recusandae enim dignissimos ducimus?</p>
                                                 </div>
                                     </div>
                                      <div className="about-more-moja">
                                                <img src={research} alt="" />
                                                 <div className="about-more-texts">
                                                          <h4>Data Collections</h4>
                                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis, dolores quidem nam harum sint consequuntur recusandae enim dignissimos ducimus?</p>
                                                 </div>
                                     </div>
                                      <div className="about-more-moja">
                                                  <img src={together} alt="" />
                                                 <div className="about-more-texts">
                                                          <h4>Sensitization & Awareness</h4>
                                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis, dolores quidem nam harum sint consequuntur recusandae enim dignissimos ducimus?</p>
                                                 </div>
                                     </div>
                         </div>
            </div>
    </div>
  )
}

export default AboutSection