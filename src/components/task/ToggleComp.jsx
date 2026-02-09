import React, { useState } from 'react'
import ret from '../../shared/images/ret.png'
const ToggleComp = () => {
  const [show, setShow] = useState(false)
  return (
    
    <div style={{ textAlign : 'center'}}>
        <b> Toggle Image</b> <br /><br /><br />

        <button onClick={() => setShow(!show)}>
          {show ? 'Hide image' : 'Show Image'}
        </button>

        <br /> <br />

        {show && (
          <img src={ret} width="500px" height="250px" ></img>
        )}


        
    </div>
  )
}

export default ToggleComp