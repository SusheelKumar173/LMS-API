import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Header from '../Header';
import { Link } from 'react-router-dom';

import "./style.css"

export default class Approved extends Component {

   

    constructor()
    {
        super();
        this.state={
            Leaves:[]
        }
    }



componentDidMount()
{

    // https://localhost:44370/api/LeaveReqAllocation/Pending?managerId=2
    // https://localhost:44370/api/LeaveReqAllocation/Approved?managerId=2
    let user = JSON.parse(sessionStorage.getItem('manager-info'))
   console.warn(user.id)


    let url="https://localhost:44370/api/LeaveReqAllocation/Approved?managerId="+user.id;
    axios.get(url).then(response=>{
        this.setState({Leaves:response.data})
    }).catch(error=>{
        console.warn(error);
    })
  
    
}

  render() {


    const {Leaves}=this.state; 
 
   
  
    return (
        <>
        <Header />
        
     
        
        
    <div><h5 class="r">Approved Leaves</h5>

<table id="leaves">
    <tr>
        <th>Leave ID</th>
        <th>Employee ID</th>
        <th>Number Of Days</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Leave Type</th>
        <th>Status</th>
        <th>Reason</th>
        <th>Comments</th>
        {/* <th>Action</th> */}
        {/* <th>Manager ID</th> */}
    </tr>
    {
        Leaves.map(x=>
            <tr>
                <td>{x.id}</td>
                <td>{x.employeeId}</td>
                <td>{x.number_Of_Days}</td>
                <td>{x.start_Date}</td>
                <td>{x.end_Date}</td>
                <td>{x.leave_Type}</td>
                <td>{x.status}</td>
                <td>{x.reason}</td>
                <td>{x.comments}</td>
                {/* <td>{x.applied_On}</td> */}
                {/* <td>{x.managerId}</td> */}
                {/* <td><Link to={"/updatestatus/"+x.id}>
                    <span className='updatestatus'>Update</span></Link></td> */}
            </tr>
            
            )
    }
</table>
   
        </div>
    
        </>
    )
  }
}
