import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Navigate, useNavigate } from 'react-router-dom'
// import ReactDOM from 'react-dom'

import "./style.css"

export default function ManagerLogin() {

const [id,setId]=useState("");
const [fullname,setName] =useState("");
const [password,setPassword] = useState("");
const [emailId,setEmail] = useState("");
const [emailIderror,setEmailIderror]=useState("");
const [passworderror,setPassworderror]=useState("");
const [error,setError]=useState("");

  const history = useNavigate();
  useEffect(() =>{
    if(sessionStorage.getItem('manager-info')) {
      // history.push("/show")
      // navigate('/create');
      // history("/create");
      history("/managerdashboard");
    }
}, [])


async function mgrlogin()
{
  if(emailId=="" || password=="")
  {
   // alert("Enter Credentials");
   setEmailIderror("Please Enter EmailId");
   setPassworderror("Please Enter Password");
    history("/managerlogin")
  }
  else if(!emailId.includes("@"))
  {
    setEmailIderror("Not a valid Email Address.Please Check");

     history("/managerlogin")
  }
  else{
  console.warn(password,emailId)

  let item={password,emailId};
  
  let result = await fetch("https://localhost:44370/api/Manager/Login/?emailId="+emailId+"&password="+password,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept":'application/json'
    },
    body:JSON.stringify(item)
  }).then(res=>res.json())
  .then((result)=>{
    alert("Welcome");

    sessionStorage.setItem("manager-info",JSON.stringify(result))

  history("/managerdashboard");
  },
  (error)=>{
    setError('Invalid Credentials .!! Please Check & Try Again');
    history("/managerlogin")
  })
  
  
  
  
  // .catch(error=>{
  //   alert(error);
  // });
  // result = await result.json();
 
  

  // let msg = console.warn(JSON.stringify(result))
  // console.warn(msg);
  // // alert(msg)
  // sessionStorage.setItem("manager-info",JSON.stringify(result))

  // history("/managerdashboard");
  }

}



  return (
    <>
    <Header/>
    <br></br>
    <div className='container'>
    <div className='col-sm-6 offset-sm-3'>
      <h4>Manager Login Page</h4>
      <br></br>

    <label><strong>Manager Email ID</strong></label>
    <input type="text" placeholder='Enter Email ID' onChange={(e)=>setEmail(e.target.value)} className='form-control' required></input>
<p class="e">{emailIderror}</p>
    <br>
    </br>


    {/* <label><strong>Employee Email ID</strong></label>
    &nbsp;
    <input type="text"  placeholder='Enter Email'onChange={(e)=>setEmail(e.target.value)}  className='form-control' required></input>

    <br></br> */}

    <label><strong>Manager Password</strong></label>
    &nbsp;
    <input type="password"  placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} className='form-control' required></input>
    <p class="e">{passworderror}</p>
    <br>
    </br>

   
    </div>

    <p class="e">{error}</p>

    <button onClick={mgrlogin} className='btn btn-primary'>Login</button>

    </div>
    </>
  )
}
