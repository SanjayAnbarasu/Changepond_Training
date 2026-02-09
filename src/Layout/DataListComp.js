import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../components/day4/redux/apiSlice'
import { useState, useEffect } from 'react'


const DataListComp = () => {
    
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.api.data);
    
    const status= useSelector((state)=>state.api.status);

    const [newData, setNewData] = useState('');

    useEffect(()=>{
        dispatch(fetchData());
    },[])
        

  return (
    <div>
        <h2> This is a Data list</h2>

        <table className ='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>sr.no</th><th>Name</th><th>Price</th><th>company</th><th>Action</th>

            </tr>
          </thead>
          <tbody>
            {
              data.length > 0 && data.map((value,index)=>{
                return <tr key={value.id}> 
                  <td>{index+1}</td>
                  {/* <td>{value.id}</td> */}
                  <td>{value.pname}</td>
                  <td>{value.pprice}</td>
                  <td>{value.pcompany}</td>
                  <td>
                    {/* <Link to={`/dashboard/updateproduct/${value.id}`} className='btn btn-outline-success btn-sm'>Edit
                    <EditIcon></EditIcon>
                    </Link>
                    <button type ='button' onClick={()=>deleteproduct(value.id)} className='btn btn-outline-danger btn-sm'>Delete
                    <DeleteIcon ></DeleteIcon>
                    </button> */}
                  </td>
                </tr>
              })
            }
          </tbody>
          </table>
    </div>
  )
}

export default DataListComp