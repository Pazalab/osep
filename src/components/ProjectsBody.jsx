import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"

const ProjectsBody = () => {
  return (
    <div className="projects-section">
               <div className="inner-row">
                          <div className="projects-section-content">
                                      <div className="intro">
                                                <h3>What we&apos;ve Done</h3>
                                                <h1>Our Projects & Programs</h1>
                                      </div>

                                      <div className="projects-section-row">
                                                <div className="project-moja">
                                                           <div className="project-image">
                                                                     <img src={project1} alt="" />
                                                           </div>
                                                           <h3>Kojwach Environment Sensitization</h3>
                                                </div>
                                                <div className="project-moja">
                                                           <div className="project-image">
                                                                     <img src={project2} alt="" />
                                                           </div>
                                                           <h3>Kobuya Tree planting Session</h3>
                                                </div>
                                      </div>
                          </div>
               </div>
    </div>
  )
}

export default ProjectsBody