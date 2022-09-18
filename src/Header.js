import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowAllEmployee from './Employee/ShowAllEmployee'

import axios from 'axios';
import Table from 'react-bootstrap/Table'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CDropDown from 'react-bootstrap';

import { Navigate, useNavigate } from 'react-router-dom'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'



export default function Header() {
  let user = JSON.parse(localStorage.getItem('user-info'))
  let mgr = JSON.parse(sessionStorage.getItem('manager-info'))

  let a = null
  // console.warn(user)
  const history = useNavigate();


  function logOut(){
    localStorage.clear();
    history("/login");

  }


  function logOutmgr(){
   sessionStorage.clear();
    history("/managerlogin");

  }


function myProfile()
 {
  window.location="/myprofile"

 }

 function myManager()
 {
  window.location="/managerdetails"

 }


//   <>
//   <Header />
// <div>ShowAllEmployees

// <Table striped bordered hover>
// <tr>
//   <th>Employee ID</th>
//   <th>Employee Name</th>
//   <th>PassWord</th>
//   <th>Email ID</th>
//   <th>Phone</th>
//   <th>Date Of Joining</th>
//   <th>Department</th>
//   <th>Manager ID</th>
// </tr>
// {
//   user.map(x=>
//       <tr>
//           <td>{user.id}</td>
//           <td>{user.name}</td>
//           <td>{user.password}</td>
//           {/* <td>{x.emailId}</td>
//           <td>{x.phone}</td>
//           <td>{x.doj}</td>
//           <td>{x.department}</td>
//           <td>{x.managerId}</td> */}
//       </tr>
      
//       )
// }
// </Table>

  
//   </div>

//   </>




//  }







  return (
    // <div>Header</div>
    <div>
      {/* // <div>Header</div> */}
      <Navbar bg="dark" variant="dark">
        {/* <Container>
          <Navbar.Brand href="#home">LMS</Navbar.Brand> */}
        <Nav className="me-auto navbar_wrapper">


        
       {
           sessionStorage.getItem('manager-info') ?
           <>
          <Link to ="/managerdashboard">DashBoard</Link>
           <Link to="/show">My Reporting Employee</Link>
           {/* <Link to="/delete">Delete Employee</Link>
           <Link to="/search">Search Employee</Link> 
           <Link to="/create">Create Employee</Link> */}
          
          
              {/* <Link to="/create"> Create</Link>  */}
           </>
           : localStorage.getItem('user-info') ?
           <>
             {/* <Link to="/">LMS</Link>
              <Link to="/login">Login</Link>
              <Link to="/managerlogin">Manager Login</Link> */}
              {/* <Link to="/myprofile">My Profile</Link> */}
              <Link to="/employeedashboard">DashBoard</Link>
              {/* <Link to="/leave">Apply Leave</Link>
              <Link to="/managerdetails">Manager Details</Link>
              <Link to="/update">Edit Profile</Link> 
              <Link to="/myleave">My Leave Details</Link> 
              <Link to="/changepassword">Change Password</Link> */}
           </>
           :
           <>
            <Link to="/">LMS</Link>
              <Link to="/login">Employee Login</Link>
              <Link to="/managerlogin">Manager Login</Link>
           </>
       }
      
       
{/* 
{

localStorage.getItem('manager-info') ?
<>

  <Link to="/show">Employee DashBoard</Link>
  <Link to="/delete">Delete Employee</Link>
  <Link to="/search">Search Employee</Link>
  <Link to="/create">Create Employee</Link> 
   <Link to="/update">Update Employee</Link>
</>
: 
  <>
  <Link to="/">LMS</Link>
   <Link to="/login">Login</Link>
   <Link to="/managerlogin">Manager Login</Link>
  </>

}
        */}


        </Nav>

        {/* <Dropdown>
   <Dropdown.Toggle variant="success" id="dropdown-basic">
 ACTIONS
   </Dropdown.Toggle>

   <Dropdown.Menu>
     <Dropdown.Item className='drop'> <Link to="/">Employee DashBoard</Link></Dropdown.Item>
     <Dropdown.Item ><Link to="/delete">Delete Employee</Link></Dropdown.Item>
     <Dropdown.Item > <Link to="/create">Create Employee</Link></Dropdown.Item>
     <Dropdown.Item ><Link to="/search">Search Employee</Link></Dropdown.Item>
     <Dropdown.Item > <Link to="/update">Update Employee</Link></Dropdown.Item>
     
   </Dropdown.Menu>
 </Dropdown> */}

        {/* <DropdownButton title="ACTION">
    <Dropdown.Item className="drop"> <Link to="/">Employee DashBoard</Link></Dropdown.Item>
        <Dropdown.Item ><Link className='link' to="/delete">Delete Employee</Link></Dropdown.Item>
        <Dropdown.Item > <Link to="/create">Create Employee</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/search">Search Employee</Link></Dropdown.Item>
        <Dropdown.Item > <Link to="/update">Update Employee</Link></Dropdown.Item>
      
     
    </DropdownButton> */}
{
        localStorage.getItem('user-info')  ?
        <>
        <Nav  >
          {/* <NavDropdown title={user && user.name}> */}
          <NavDropdown class="btn btn-secondary dropdown-toggle"  title={user && user.name}>
            <NavDropdown.Item onClick={logOut}>LogOut</NavDropdown.Item>
            <NavDropdown.Item onClick ={myProfile}>My Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={myManager}>Manager Details</NavDropdown.Item>
          </NavDropdown>
        </Nav> 
        <div>&nbsp;&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;&nbsp;</div>

        </>
        : null
       
       
      
}







{
        sessionStorage.getItem('manager-info')  ?
       <>
       <Nav>
          
          {/* <NavDropdown title={user && user.name}> */}
          <NavDropdown title={mgr && mgr.fullName}>
            <NavDropdown.Item onClick={logOutmgr}>LogOut</NavDropdown.Item>
            <NavDropdown.Item onClick ={myProfile}>My Profile</NavDropdown.Item>
            <NavDropdown.Item >Manager Details</NavDropdown.Item>
          </NavDropdown>
        </Nav>

<div>&nbsp;&nbsp;&nbsp;</div>
<div>&nbsp;&nbsp;&nbsp;</div>
<div>&nbsp;&nbsp;&nbsp;</div>
<div>&nbsp;&nbsp;&nbsp;</div>
<div>&nbsp;&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;&nbsp;</div>

</>
        : null
        
}

{
 localStorage.getItem('manager-info')  ?
 <div>{mgr.name}</div>
 :null
}

{
 localStorage.getItem('manager-info')  ?
 <div>{mgr.name}</div>
 :null
}


   
      </Navbar>
    </div>


  )
}
