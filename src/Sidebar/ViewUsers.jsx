import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ViewUsers = () => {
  let[users, setUsers] =useState([]);
  let navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:4000/user")
    .then(x=>setUsers(x.data))
    .catch((err)=>alert(err))
  }
  
  
  ,[])

  return (
    <div style={{width:"100%" ,height:"90%"}}>
       <h1>Users</h1>
       <div className="userCards">
          {users.map((x)=>{ return(
            <div className='userCard'>
            <h2>{x.firstname + x.lastname}</h2>
            
            <h3>{x.email}</h3>
            <h3>{x.mobile}</h3>
            <h4>{x.dob}</h4>

            <div className="cardbuttons">
              <button onClick={() => {
                    navigate(`/admindashboard/updateuser/${x.id}`);
                    console.log(x.id);
                  }}
              >EDIT</button>
              <button>DELETE</button>
            </div>

            </div>
            
          ) })}


       </div>
    </div>
  )
}

export default ViewUsers
