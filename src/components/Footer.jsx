import footerLogo from "../assets/footerLogo.png"
const Footer = () => {
  return (
    <footer>
                <div className="inner-row"> 
                          <div className="footer-content">
                                     <div className="footer-double-column">
                                                 <div className="footer-logo">
                                                          <img src={footerLogo} alt="" />
                                                 </div>
                                                 <p>We are an organization promoting environmental awareness, inspiring action and implementing sustainable solutions to protect our planet.</p>
                                     </div>
                                     <div className="footer-double-column"></div>
                          </div>
                </div>
    </footer>
  )
}

export default Footer