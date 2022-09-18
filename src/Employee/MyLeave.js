import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Header from '../Header';
import "./style.css"

export default class MyLeave extends Component {
    constructor()
    {
        super();
        this.state={
            Leaves:[]
        }
        
    }

reloadLeaveList()
{
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.warn(user.id)

    let url="https://localhost:44370/api/LeaveReqAllocation/Details?employeeId="+user.id; 
    axios.get(url).then(response=>{
        this.setState({Leaves:response.data})
    }).catch(error=>{
        console.warn(error);
    })
}

componentDidMount()
{
    this.reloadLeaveList();
}

  render() {

    const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const {Leaves}=this.state; 

    return (
        <>
        <Header />
    <div>
    <br></br>
        <h4>My Leave Details</h4>

<Table id="leaves">
    <tr>
        <th>Leave ID</th>
        <th>Employee ID</th>
        <th>Number Of Days</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Leave Type</th>
        <th>Status</th>
        <th>Reason</th>
        <th>Applied On</th>
        <th>Manager Comments</th>
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
                <td>{date}</td>
                <td>{x.comments}</td>
            </tr>
            
            )
    }
</Table>




        
        </div>
    
        </>
    )
  }
}
