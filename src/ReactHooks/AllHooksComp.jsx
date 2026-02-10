import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const AllHooksComp = () => {
  return (
    <div>
      {/* <h2> This All Hooks Component</h2>
      <Outlet /> */}
      <div className='card bordr-success'>
        <div className='card-header border-success'>
          <Link to="myimages" className="btn btn-success btn-sm">MyImages</Link>{" "}
          <Link to="usestate" className="btn btn-success btn-sm">useState</Link>{" "}
          <Link to="useeffect" className="btn btn-success btn-sm">useeffect</Link>{" "}

        </div>
        <div className="card-body border-success">
          <Outlet />
        </div>

      </div>
    </div>

  );
}

export default AllHooksComp