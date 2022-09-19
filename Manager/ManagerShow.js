import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Header from '../Header';


export default class ShowAllEmployee extends Component {

   

    constructor()
    {
        super();
        this.state={
            Employees:[]
        }
    }



componentDidMount()
{
    let user = JSON.parse(sessionStorage.getItem('manager-info'))
   console.warn(user.id)
    let url="https://localhost:44370/api/Employee/Employees/"+user.id;
    axios.get(url).then(response=>{
        this.setState({Employees:response.data})
    }).catch(error=>{
        console.warn(error);
    })
  
    
}

  render() {


    const {Employees}=this.state; 
 
   
  
    return (
        <>
        <Header />
        
     
        
        
    <div><h4 class="r">My Reporting Employees</h4>

<table id="leaves">
    <tr>
        <th>Employee ID</th>
        <th>Employee Name</th>
        <th>PassWord</th>
        <th>Email ID</th>
        <th>Phone</th>
        <th>Date Of Joining</th>
        <th>Department</th>
        {/* <th>Manager ID</th> */}
    </tr>
    {
        Employees.map(x=>
            <tr>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.password}</td>
                <td>{x.emailId}</td>
                <td>{x.phone}</td>
                <td>{x.doj}</td>
                <td>{x.department}</td>
                {/* <td>{x.managerId}</td> */}
            </tr>
            
            )
    }
</table>
   
        </div>
    
        </>
    )
  }
}
