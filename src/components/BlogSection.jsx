import { Link } from "react-router-dom"
import blog1 from "../assets/blog1.jpeg"
import blog2 from "../assets/blog2.jpeg"
import blog3 from "../assets/blog3.jpeg"
import { GoArrowUpRight } from "react-icons/go";
const BlogSection = () => {
  return (
    <div className="blog-section">
              <div className="inner-row">
                        <div className="blog-section-content">
                                     <div className="intro">
                                                <h1>News & Articles</h1>
                                                <div className="intro-description">
                                                           <p>Stay informed about about the latest developments in our environment campaigns and how you can get involved.</p>
                                                           <Link to={'/'}>Explore</Link>
                                                </div>
                                     </div>

                                     <div className="blog-row">
                                                <div className="blog-moja">
                                                          <img src={blog1} alt="" />
                                                          <h2>Impacting the Environment with Meaningful Sensitization</h2>
                                                          <Link to={''}>Read More <span><GoArrowUpRight /></span></Link>
                                                </div>
                                                <div className="blog-moja">
                                                          <img src={blog2} alt="" />
                                                          <h2>Empowering Children early towards Environmental Conservation</h2>
                                                          <Link to={''}>Read More <span><GoArrowUpRight /></span></Link>
                                                </div>
                                                <div className="blog-moja">
                                                          <img src={blog3} alt="" />
                                                          <h2>Seedlings Reparations & Grafting Practices</h2>
                                                          <Link to={''}>Read More <span><GoArrowUpRight /></span></Link>
                                                </div>
                                     </div>
                        </div>
              </div>
    </div>
  )
}

export default BlogSection