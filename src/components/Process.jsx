import process from "../assets/process.jpg"
import { approach } from "../data/approach"
import Accordion from "./Accordion"
const Process = () => {
  return (
    <div className="process-section">
                 <div className="process-section-row">
                              <div className="process-image">
                                       <img src={process} alt="" />
                              </div>
                              <div className="process-description">
                                        <h1>Our Approach</h1>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, exercitationem? Modi vel voluptatem fugiat facilis nam tenetur rerum aut vitae nihil. Dignissimos corporis, hic nostrum reprehenderit natus quod itaque vel repellendus commodi debitis eveniet dolor qui odio quos optio aperiam exercitationem cupiditate amet voluptas iusto maxime fugiat fuga repellat tempore!</p>

                                        <div className="accordions">
                                                 { approach.map(item => <Accordion  key={item.id} data={item} /> )}
                                        </div>
                              </div>
                 </div>
    </div>
  )
}

export default Process