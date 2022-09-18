import React, { Component } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'

export default class ManagerDashboard extends Component {
  render() {
    return (
      <>
        <Header></Header>
        {/* <div class="d">
        <i class="fa-solid fa-user"></i> <Link to="/show">My Reporting Employees</Link><br></br><br></br>
        <i class="fa-solid fa-house"></i> <Link to="/managerdashboard">DashBoard</Link><br></br><br></br>
        <Link to="/pending">Pending Leaves</Link><br></br><br></br>
        <Link to="/approved">Approved Leaves</Link><br></br><br></br>

      </div> */}



<div className='cont'>
    <section class="main">
        <div class="main-top">
            <h4 class="cc">Dashboard</h4>
        </div>
        <div class="main-skills">
            <div class="card">
            <i class="fa-solid fa-user"></i>
                <h3>My Profile</h3>
                <p>Get your Details,Edit and Update</p>
                <button><Link to="/managerprofile">View</Link></button>
                <button> <Link to="/managerupdate">Update</Link> </button>
            </div>
            <div class="card">
            <i class="fa-solid fa-user-group"></i>
                <h3>My Reporting Employees</h3>
                <p>Know your Reporting Employees</p>
                <button> <Link to="/show">View</Link></button>
            </div>
            <div class="card">
            <i class="fa-solid fa-lock"></i>
                <h3>Change Password</h3>
                <p>change your password to secure your account</p>
                <button> <Link to="/managerchangepassword">Change Password</Link></button>
            </div>
          
           
        </div>
    </section>

    <section class="main">
        <div class="main-top">
        </div>
        <div class="main-skills">
            <div class="card">
            <i class="fa-solid fa-person-circle-question"></i>
                <h3>Pending Leaves</h3>
                <p>Approve/Deny Leave</p>
                <button> <Link to="/pending">View</Link></button>
            </div>
            <div class="card">
            <i class="fa-solid fa-person-circle-check"></i>
                <h3>Approved Leaves</h3>
                <p>Know all the leaves you have Approved.</p>
                <button><Link to="/approved">View</Link></button>
            </div>
            {/* <div class="card">
                <i class="fas fa-laptop-code"></i>
                <h3>Apply For Leave</h3>
                <p>Want to Apply For Leave.Click Below</p>
                <button>Apply Leave</button>
            </div> */}
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

