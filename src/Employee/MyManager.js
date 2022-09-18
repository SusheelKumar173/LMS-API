import axios from 'axios';
import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

import Table from 'react-bootstrap/Table'
import Header from '../Header';

export default class MyManager extends Component {
    constructor()
    {
        super();
        this.state={
                id:'',
                fullName:'',
                emailId:'',
                phone:'',
                password:'',
                employeeId:''

        }

       
    }

    componentDidMount()
{
    let user = JSON.parse(localStorage.getItem('user-info'))
   console.warn(user.managerId)
    let url="https://localhost:44370/api/Manager/SearchManager/"+user.managerId;
    axios.get(url).then(response=>{
        this.setState({
            id:response.data.id,
            fullName:response.data.fullName,
            emailId:response.data.emailId,
            phone:response.data.phone,
            password:response.data.password,
            employeeId:response.data.employeeId,
            managerId:response.data.managerId
        })
    }).catch(error=>{
        console.warn(error);
    })
  
    
}




    render() {

      
    const{id} = this.state;
    const{fullName}=this.state;
    const{emailId}=this.state;
    const{phone}=this.state;
    const{password}=this.state;
    const{employeeId}=this.state;
    const{managerId}=this.state;
    
        return (
          <>
          <div>
          <Header />
            {/* <div>
                ID = {id}
                NAME = {name}
                PASSWORD = {password}
                Email ID = {emailId}
                phone = {phone}
                DOJ = {doj}
                Department={department}
                Manager ID = {managerId}
            </div> */}
    
    
            {/* <Table striped bordered hover>
            <tr>
            
            <th>Manager Name</th>
            <th>Email ID</th>
            <th>Phone</th>
            <th>Employee ID</th>
        </tr>
        <tr>
            <td>{fullName}</td>
            <td>{emailId}</td>
            <td>{phone}</td>
            <td>{employeeId}</td>
        </tr>
    
    
            </Table> */}
    
    {/* <div className="col-sm-6 offset-sm-3">
<div class="logindiv">
  
<i class="fa-solid fa-user fa-7x"></i>
        <div class="title"><strong>MANAGER DETAILS</strong>
<div class="sub-title">
    <div class="fields">
    <h4> Manager ID :&nbsp;{id}</h4>
        <h4> Name :  {fullName}</h4>
        <h4>  Email ID : &nbsp; {emailId}</h4>
        <h4> Phone:&nbsp; {phone}</h4>
       
      
    
        </div>
        </div>
        </div>
        </div>
        </div> */}

<br></br><br></br><br></br><br></br><br></br>

<div className="col-sm-6 offset-sm-3">
<h5 class="dd">MY MANAGER DETAILS</h5>
      <table id="profile">
        <tr>
          <th colSpan={2}>MANAGER DETAILS</th>
        </tr>
  <tr>
    <td>Manager ID</td>
    <td>{id}</td>
  </tr>
  <tr>
   <td>Name</td>
   <td>{fullName}</td>
  </tr>
  <tr>
    <td>Email ID </td>
    <td>{emailId}</td>
    
  </tr>
  <tr>
    <td>Phone</td>
    <td>{phone}</td>
  </tr>

 
</table>

</div>
        
</div>
          </>
    
        )
      }
    }
    
