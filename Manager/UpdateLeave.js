
import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Navigate, useNavigate } from 'react-router-dom'
// import ReactDOM from 'react-dom'
import { useParams } from "react-router-dom";
 import axios from 'axios';
//import "./style.css"

export default function Login() {



const [status,setStatus] = useState("");
const [comments,setComments] = useState("");


const [data,setData]=useState([])
    const params = useParams();
    const {id} = params;

    console.warn(data.employeeId)
   // console.warn(id)

//   const history = useNavigate();
//   useEffect(() =>{
//     if(localStorage.getItem('user-info')) {
//       // history.push("/show")
//       // navigate('/create');
//       // history("/create");
//       history("/employeedashboard");
//     }
// }, [])

function UpdateLeave()
{
let url="https://localhost:44370/api/LeaveReqAllocation/Approve/"+id;
axios.put(url,{
    status:status,
    comments:comments,
}).then(response=>{
    alert("Status Updated.!!") 

}).catch(error=>{
    alert(error);
})

localStorage.clear();
window.location="/pending";
}

  return (
    <>
    <Header/>
    <br></br>
    <div>
    <div className='col-sm-6 offset-sm-3 ' >
      <h4>Approve/Deny Leave</h4>
<br></br>

<div class="form-floating mb-3">

    <input type="text" defaultValue={id} className='form-control' id="floatingInput" disabled required></input>
    <label for="floatingInput"><strong>Leave ID</strong></label><br></br>
    </div>
    <br></br>


    {/* <label><strong>Status</strong></label><br></br>
    <input type="text" placeholder='Enter Email ID'onChange={(e)=>setStatus(e.target.value)} className='form-control' required></input>

    <br></br> */}


{/* <div class="button">
  <input type="radio" id="a25" name="check-substitution-2" />
  <label class="btn btn-default" for="a25">Læg i kurv</label>
</div>
<div class="button">
  <input type="radio" id="a50" name="check-substitution-2" />
  <label class="btn btn-default" for="a50">Læg i kurv</label>
</div>
<div class="button">
  <input type="radio" id="a75" name="check-substitution-2" />
  <label class="btn btn-default" for="a75">Læg i kurv</label>
</div> */}




<div class="rcbutton">
 
    <input type="radio" name="status" value="Approved"  id="a25"  onChange={(e)=>setStatus(e.target.value)} />
    <label class="btn btn-default" for="a25">Approved</label>
    </div>

    <div class="rcbutton">  
    
    <input type="radio" name="status" value="Denied" id="a50" onChange={(e)=>setStatus(e.target.value)} />
    <label class="btn btn-default" for="a50">Deny</label>
</div>


<br></br>


<div class="form-floating mb-3">
    <input type="text" placeholder='Enter Comments' onChange={(e)=>setComments(e.target.value)} className='form-control' id="floatingInput" required></input>
    <label for="floatingInput"><strong>Manager Comments</strong></label><br></br>   
    </div>

    <br>
    </br>



    </div>


    <button type='submit' onClick={UpdateLeave} className='btn btn-primary'>Submit</button>
    </div>
   
    </>
  )
}
