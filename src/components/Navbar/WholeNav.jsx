import { useState } from "react"
import { navContext } from "./navcontext"
import Nav from "./Nav"
import Sidebar from "./Sidebar"

const WholeNav = () => {
    const [navStatus, setNavStatus] = useState(false)
  return (
    <navContext.Provider value={[navStatus, setNavStatus]} >
              <Nav />
              {/* <Sidebar /> */}
    </navContext.Provider>
  )
}

export default WholeNav