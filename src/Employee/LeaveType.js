import React, { Component } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'


import "./style.css"

export default class LeaveType extends Component {
  render() {
    return (
      <>
        <Header></Header>
        {/* <div class="d">
        <i class="fa-solid fa-user"></i> <Link to="/myprofile">My Profile</Link><br></br><br></br>
        <i class="fa-solid fa-house"></i> <Link to="/employeedashboard">DashBoard</Link><br></br><br></br>
        <i class="fa-regular fa-house-person-leave"></i><Link to="/leave">Leave Request</Link><br></br><br></br>
        <i class="fa-solid fa-user"></i> <Link to="/managerdetails">Manager Details</Link><br></br><br></br>
         <Link to="/myleave">My Leave Details</Link><br></br><br></br>
         <Link to="/changepassword">Change Password</Link>
      </div> */}


<div className='cont'>
    <section class="main">
        <div class="main-top">
            <h4 class="cc">Leave Types</h4>
        </div>
        <div class="main-skills">
            <div class="card">
            <i class="fa-solid fa-temperature-full"></i>
                <h3>Sick Leaves</h3>
                <h4>Default Days : 20 </h4>
               
            </div>
            <div class="card">
            <i class="fa-solid fa-gift"></i>
                <h3>Earned Leaves</h3>
                <h4>Default Days : 5 </h4>
        
      
            </div>
            <div class="card">
            <i class="fa-solid fa-person-pregnant"></i>
                <h3>Maternity Leave</h3>
                <h4>Default Days : 10 </h4>
            
          
            </div>

            <div class="card">
            <i class="fa-regular fa-handshake"></i>
                <h3>Casual Leave</h3>
                <h4>Default Days : 15 </h4> 
          
            </div>
          
           
        </div>
    </section>

</div>




      </>
    )
  }
}
