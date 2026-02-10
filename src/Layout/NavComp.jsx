import React from 'react'
import { Link } from 'react-router-dom'


const NavComp = () => {
  return (
    <div>

    <Link to="myimages" className='btn btn-primary'>MyImages</Link>{"  "}
    <Link to="ToggleImage" className='btn btn-success'>ToggleImage</Link>{"  "}'
    <Link to="hooks" className='btn btn-primary'>Hooks</Link>{"  "}
    <Link to="virtualdom" className='btn btn-primary'>VirtualDOM</Link>{"  "}
    <Link to="formval" className='btn btn-primary'>Form Validation</Link>{"  "}
    <Link to="productdetail" className='btn btn-success'>Product Details</Link>{"  "}
    <Link to="addproduct" className='btn btn-warning'>Add Details</Link>{"  "}
    <Link to="updateproduct" className='btn btn-danger'>Update Details</Link>{"  "}
    <Link to="datalist" className='btn btn-success'>Data List</Link>{"  "}
    {/* <Link to="RahulComp" className='btn btn-primary'>Classcomp</Link>{"  "} */}
    </div>
  )
}

export default NavComp