import React, { useState } from 'react'
<<<<<<< HEAD
import Icecream from "../../shared/images/Icecream.jpg"
import Burger from "../../shared/images/Burger.jpg"
import Jalebi from "../../shared/images/Jalebi.jpg"
=======
import samosa from "../../shared/images/samosa.png"
import ret from "../../shared/images/ret.png"
import dosa from "../../shared/images/dosa.png"
import idly from "../../shared/images/idly.png"
>>>>>>> 28adfcf0eefb598d1d0feb25212d8cfa152f5d3d

const MultiToggleComp = () => {
  const [show, setShow] = useState(null)
    return (
      <div style={{ textAlign : 'center'}}>
          <b> Toggle Image</b> <br /><br /><br />
  
<<<<<<< HEAD
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
=======
          <button onClick={() => setShow(ret)}>
            Show Ret
          </button>
          <button onClick={() => setShow(dosa)}>
            Show Dosa
          </button>
          <button onClick={() => setShow(idly)}>
            Show Idly
          </button>
          <button onClick={() => setShow(samosa)}>
            Show Samosa
>>>>>>> 28adfcf0eefb598d1d0feb25212d8cfa152f5d3d
          </button>
  
          <br /> <br />
  
          {show && (
            <img src={show} width="500px" height="500px" />
          )}
    </div>
    )
}

export default MultiToggleComp