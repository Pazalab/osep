/* eslint-disable react/prop-types */
import { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const Accordion = ({ data }) => {
  const [status, setStatus] = useState(false);

  const toggleAccordion = () =>  setStatus(!status)

  return (
    <div className="accordion">
             <div className={status ? "accordion-header active" : "accordion-header"} onClick={toggleAccordion}>
                         <h3>{data.title}</h3>
                         <div className="toggle-actions">                    
                                     { status ? <span><AiOutlineMinus /></span>: <span><AiOutlinePlus /></span>}
                         </div>
             </div>
             <div className={ status ? "accordion-answer active" : "accordion-answer"}>
                     <div className="answer-inner">
                                 <p>{data.answer}</p>
                     </div>
             </div>
    </div>
  )
}

export default Accordion