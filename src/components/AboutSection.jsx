import reforestation from "../assets/reforestation.png"
import env_analysis from "../assets/env-research.png"
import conservation from "../assets/forest-conservation.png"
import global from "../assets/global.png"

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
            </div>
    </div>
  )
}

export default AboutSection