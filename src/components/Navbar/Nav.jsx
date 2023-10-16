import { BsClockFill, BsEnvelopeFill } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6"
import { IoMdCall } from "react-icons/io"
import logo from "../../assets/logo.png"
const Nav = () => {
  return (
    <header>
                <div className="header-content">
                         <div className="topbar">
                                  <div className="inner-row">
                                          <div className="topbar-content">
                                              <div className="topbar-column">
                                                      <div className="column-tab">
                                                                <span><BsClockFill /></span>
                                                                <p>Mon - Fri: 9:00 - 18:00</p>
                                                      </div>
                                                      <div className="column-tab">
                                                                <span><BsEnvelopeFill /></span>
                                                                <p>help@osepke.org</p>
                                                      </div>
                                            </div>
                                            <div className="topbar-column">
                                                      <p>Visit our Socials: </p>
                                                       <div className="social-links">
                                                                 <ul>
                                                                         <li><NavLink to={'/'}><FaFacebookF /></NavLink></li>
                                                                         <li><NavLink to={'/'}><FaXTwitter /></NavLink></li>
                                                                         <li><NavLink to={'/'}><FaInstagram /></NavLink></li>
                                                                         <li><NavLink to={'/'}><FaLinkedinIn /></NavLink></li>
                                                                 </ul>
                                                       </div>
                                            </div>
                                              </div>
                                  </div>
                        </div>

                        <div className="header-bar">
                                     <div className="inner-row">
                                                 <div className="header-bar-content">
                                                            <NavLink to={'/'} className='logo'>
                                                                      <img src={logo} alt="Osep Logo" />
                                                            </NavLink>

                                                            <nav>
                                                                      <ul>
                                                                              <li><NavLink to={'/'}>Home</NavLink></li>
                                                                              <li><NavLink to={'/about-us'}>About Us</NavLink></li>
                                                                              <li><NavLink to={'/projects'}>Projects</NavLink></li>
                                                                              <li><NavLink to={'/resources'}>Resources</NavLink></li>
                                                                              <li><NavLink to={'/blog'}>Blog</NavLink></li>
                                                                      </ul>
                                                            </nav>

                                                            <div className="action-btns">
                                                                       <div className="phone-action">
                                                                                 <span><IoMdCall /></span>
                                                                                 <h3>0708 941 520</h3>
                                                                       </div>
                                                                       <NavLink to={'/contact'}>Contact Us</NavLink>
                                                            </div>
                                                 </div>
                                     </div>
                        </div>
                </div>
    </header>
  )
}

export default Nav