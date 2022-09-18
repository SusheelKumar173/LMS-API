import React from 'react'
import Header from '../Header';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom'

import "./style.css"

export default function ManagerProfile() {

    let user = JSON.parse(sessionStorage.getItem('manager-info'))
    console.warn(user)
  return (
    <div>
<Header />
{/* <div className="col-sm-6 offset-sm-3">
<div class="logindiv">
  
<i class="fa-solid fa-user fa-7x"></i>
        <div class="title"><strong class="mp">MY PROFILE</strong>
<div class="sub-title">
    <div class="fields">
        <h4> Id &nbsp; : &nbsp; {user.id}</h4>
        <h4>  Name &nbsp;: &nbsp; {user.name}</h4>
        <h4> Password :&nbsp; {user.password}</h4>
        <h4>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Email&nbsp; &nbsp;  : &nbsp;{user.emailId}</h4>
        <h4>  &nbsp; &nbsp; &nbsp; &nbsp;Phone&nbsp;&nbsp; :  &nbsp;{user.phone}</h4>
        <h4>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;DOJ &nbsp;&nbsp;:&nbsp; {user.doj}</h4>
        <h4> &nbsp;Department : {user.department}</h4>
        <h4>Available Leave Balance :{user.available_Leave_Balance}</h4>
    
        </div>
        </div>
        </div>
        </div>
        </div> */}
<br></br><br></br><br></br>



<div className="col-sm-6 offset-sm-3">
    <h4 class="r">MY PROFILE</h4>
      <table id="profile">
        <tr>
          <th className='mp' colSpan={2}>MY PROFILE</th>
        </tr>
  <tr>
    <td>ID</td>
    <td>{user.id}</td>
  </tr>
  <tr>
   <td>Name</td>
   <td>{user.fullName}</td>
  </tr>
  <tr>
    <td>Password</td>
    <td>{user.password}</td>
    
  </tr>
  <tr>
    <td>Email ID</td>
    <td>{user.emailId}</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>{user.phone}</td>
  </tr>
 
</table>

<br></br><br></br>
<Button className='btn btn-info'><Link class="ep" to="/managerupdate">Edit Profile</Link></Button>

        </div>
        </div>
  )
}

