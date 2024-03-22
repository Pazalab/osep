import logo1 from "../assets/dum1.webp"
import logo2 from "../assets/dum2.webp"
import logo3 from "../assets/dum3.webp"
import logo4 from "../assets/dum4.webp"
import logo5 from "../assets/dum5.webp"

const Partners = () => {
  return (
    <div className="partners-section">
             <div className="inner-row">
                        <div className="partners-content">
                                      <h3>Over <span>10+ Partners</span> We are Working With</h3>
                                      <div className="partners-logos">
                                                  <img src={logo1} alt="" />
                                                  <img src={logo2} alt="" />
                                                  <img src={logo3} alt="" />
                                                  <img src={logo4} alt="" />
                                                  <img src={logo5} alt="" />
                                      </div>
                        </div>
             </div>
    </div>
  )
}

export default Partners