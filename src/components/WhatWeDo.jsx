import { NavLink } from "react-router-dom"
import leafy from "../assets/leafy.png"
import Process from "./Process"
const WhatWeDo = () => {
  return (
    <div className="what-we-do">
              <div className="inner-row">
                       <div className="what-we-do-content">
                                   <div className="intro">
                                             <h4>What We Do</h4>
                                             <h1>Projects We Engage in to Achieve Results that Last</h1>
                                             <p>We bring together people from all sides and draw from deep expertise to tackle environmental issues from every angle. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus aspernatur nihil officiis provident tenetur dolore possimus quia odit eveniet ratione.</p>
                                   </div>
                                   <div className="leafy-abstract">
                                             <img src={leafy} alt="" />
                                   </div>

                                   <div className="what-we-do-row">
                                               <div className="project-moja">
                                                            <h3>Environmental Education and Awareness</h3>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi corrupti veritatis sed aliquid, nihil est. Sequi delectus iure iste.</p>
                                                            <NavLink to={'/'}>Explore More</NavLink>
                                               </div>
                                               <div className="project-moja">
                                                            <h3>Forest Conservation & Restoration</h3>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi corrupti veritatis sed aliquid, nihil est. Sequi delectus iure iste.</p>
                                                            <NavLink to={'/'}>Explore More</NavLink>
                                               </div>
                                               <div className="project-moja">
                                                            <h3>Sustainability Practices</h3>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi corrupti veritatis sed aliquid, nihil est. Sequi delectus iure iste.</p>
                                                            <NavLink to={'/'}>Explore More</NavLink>
                                               </div>
                                               <div className="project-moja">
                                                            <h3>Environmental Advocacy & Policy</h3>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi corrupti veritatis sed aliquid, nihil est. Sequi delectus iure iste.</p>
                                                            <NavLink to={'/'}>Explore More</NavLink>
                                               </div>
                                               <div className="project-moja">
                                                            <h3>Research & Environmental Analysis</h3>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi corrupti veritatis sed aliquid, nihil est. Sequi delectus iure iste.</p>
                                                            <NavLink to={'/'}>Explore More</NavLink>
                                               </div>
                                   </div>

                                   <Process />
                       </div>
              </div>
    </div>
  )
}

export default WhatWeDo