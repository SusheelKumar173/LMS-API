import React, { Component } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'


import "./style.css"

export default class EmployeeDashBoard extends Component {
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
            <h4 class="cc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Dashboard</h4>
        </div>
        <div class="main-skills">
            <div class="card">
            <i class="fa-solid fa-user"></i>
                <h3>My Profile</h3>
                <p>Get your Details,Edit and Update</p>
                <button><Link to="/myprofile">View</Link></button>
                <button> <Link to="/update">Update</Link> </button>
            </div>
            <div class="card">
            <i class="fa-solid fa-user"></i>
                <h3>My Manager Details</h3>
                <p>Know about your Manager</p>
                <button> <Link to="/managerdetails">View</Link></button>
            </div>
            <div class="card">
                <i class="fas fa-laptop-code"></i>
                <h3>Apply For Leave</h3>
                <p>Want to Apply For Leave.<span>Click Below</span></p>
                <button><Link to="/leave">Apply Leave</Link></button>
            </div>
          
           
        </div>
    </section>

    <section class="main">
        <div class="main-top">
        </div>
        <div class="main-skills">
            <div class="card">
            <i class="fa-solid fa-lock"></i>
                <h3>Change Password</h3>
                <p>change your password to secure your account</p>
                <button> <Link to="/changepassword">Change Password</Link></button>
            </div>
            <div class="card">
            <i class="fa-solid fa-circle-info"></i>
                <h3>My Leave Details</h3>
                <p>Check your Leave Details.</p>
                <button><Link to="/myleave">View</Link></button>
            </div>
            <div class="card">
            <i class="fa-solid fa-table"></i>
                <h3>Leave Types</h3>
                <p>Know your Leave Type Details and Default Days.!!</p>
                <button><Link to="/leavetype">View</Link></button>
            </div>
            {/* <div class="card">
                <i class="fas fa-laptop-code"></i>
                <h3>Change Password</h3>
                <p>change your password to secure your account</p>
                <button>Get Started</button>
            </div> */}
           
        </div>
    </section>
</div>




      </>
    )
  }
}
