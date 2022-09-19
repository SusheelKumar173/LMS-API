import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


// import ReactDOM from 'react-dom'

import "./style.css"

export default function Login() {

const[id,setId]=useState("");
const [name,setName] =useState("");
const [password,setPassword] = useState("");
const [emailId,setEmail] = useState("");
const[emailIderror,setEmailIderror] = useState("");
const[passworderror,setPassworderror] = useState("");
const[error,setError] = useState("");

  const history = useNavigate();
  useEffect(() =>{
    if(localStorage.getItem('user-info')) {
      // history.push("/show")
      // navigate('/create');
      // history("/create");
      history("/employeedashboard");
    }
}, [])



async function login()
{
 
  if(emailId=="" || password=="")
  {
   // alert("Enter Credentials");
   setEmailIderror("Please Enter EmailId");
   setPassworderror("Please Enter Password");
    history("/login")
  }
  else if(!emailId.includes("@"))
  {
    setEmailIderror("Not a valid Email Address.Please Check & Try Again");

     history("/login")
  }
else{
  let item={emailId,password};

 console.warn(item)

  let result = await fetch("https://localhost:44370/api/Employee/Login?emailId="+emailId+"&password="+password,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept":'application/json'
    },
    body:JSON.stringify(item)
}).then(res=>res.json())
.then((result)=>{
  alert("Authentication Successfull.!! Welcome");
  localStorage.setItem("user-info",JSON.stringify(result))
  let user = JSON.parse(localStorage.getItem('user-info'))
  console.warn(user.id)  
  history("/employeedashboard");
},
(error)=>{
  setError('Invalid Credentials .!! Please Check & Try Again')
  history("/login")
})
// .catch(error=>{
//     alert(error);
// });
 // result = await result.json();

  
   // alert("result")
 
// console.warn(result);

//   let msg = console.warn(JSON.stringify(result))
//  console.warn(msg);
  // alert("Invalid")
  // alert(JSON.stringify(result))
  

  // let res = JSON.parse(localStorage.getItem('user-info'))
  // console.warn(res.id)

// localStorage.setItem("user-info",JSON.stringify(result))
  
//  let user = JSON.parse(localStorage.getItem('user-info'))
// console.warn(user.id)

//   history("/employeedashboard");
}
}



  return (
    <>
    <Header/>
    <br></br>
    <div class='container'>

    <div className='col-sm-6 offset-sm-3 ' >
     
      <h4 className='login'>Login Page</h4>
<br></br>

    <label><strong>Employee Email ID</strong></label><br></br>
    <input type="text" placeholder='Enter Email ID'onChange={(e)=>setEmail(e.target.value)} className='form-control' required></input>
<p class="e">{emailIderror}</p>
    <br></br>

    
    <label><strong>Employee Password</strong></label><br></br>
   
    <input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} className='form-control' required></input>
    <p class="e">{passworderror}</p>
    
    </div>

    <p class="e">{error}</p>

    <Link to="/forgetpasswordemail">Forget Password?</Link> <br></br>
<br></br>

    <button type='submit' onClick={login} className='btn btn-primary'>Login</button>
    </div>
   
    </>
  )
}
