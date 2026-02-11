import React, { useState } from 'react'
import Icecream from "../../shared/images/Icecream.jpg"
import Burger from "../../shared/images/Burger.jpg"
import Jalebi from "../../shared/images/Jalebi.jpg"

const MultiToggleComp = () => {
  const [show, setShow] = useState(null)
    return (
      <div style={{ textAlign : 'center'}}>
          <b> Toggle Image</b> <br /><br /><br />
  
          {/* <button onClick={() => setShow(ret)}>
            Show Ret
          </button> */}
          <button onClick={() => setShow(Burger)}>
            Show Burger
          </button>
          <button onClick={() => setShow(Jalebi)}>
            Show Jalebi
          </button>
          <button onClick={() => setShow(Icecream)}>
            Show Icecream
          </button>
  
          <br /> <br />
  
          {show && (
            <img src={show} width="500px" height="500px" />
          )}
    </div>
    )
}

export default MultiToggleComp