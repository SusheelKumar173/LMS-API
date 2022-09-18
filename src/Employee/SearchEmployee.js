import axios from 'axios';
import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

import Table from 'react-bootstrap/Table'
import Header from '../Header';

export default class SearchEmployee extends Component {
    constructor()
    {
        super();
        this.state={
                id:'',
                name:'',
                password:'',
                emailId:'',
                phone:'',
                doj:'',
                department:'',
                managerId:''

        }

        this.SearchEmployee=this.SearchEmployee.bind(this);
    }
SearchEmployee()
{
        let id = this.state.id;
        let url = "https://localhost:44370/api/Employee/Search/"+id;
        axios.get(url).then(response=>{
            this.setState({
                id:response.data.id,
                name:response.data.name,
                password:response.data.password,
                emailId:response.data.emailId,
                phone:response.data.phone,
                doj:response.data.doj,
                department:response.data.department,
                managerId:response.data.managerId
            })
        }).catch(error=>{
            console.warn(error);
        })
}

handleChange(ChangeObject)
{
    this.setState(ChangeObject);
}



  render() {

    const{id} = this.state;
    const{name} = this.state;
    const{password} = this.state;
    const{emailId} = this.state;
    const{phone}=this.state;
    const{doj}=this.state;
    const{department}=this.state;
    const{managerId}=this.state;

    return (
      <>
      <Header />
      <div >SearchEmployee</div>
      <div className="col-sm-6 offset-sm-3">
      <label>Employee ID</label>
      <input type="text"  className='form-control' name="id" onChange={(e) => this.handleChange({ id: e.target.value })}></input><br></br>
      

      <Button type="submit" onClick={this.SearchEmployee}>SEARCH</Button>
      </div>
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


        <Table striped bordered hover>
        <tr>
        <th>Employee ID</th>
        <th>Employee Name</th>
        <th>PassWord</th>
        <th>Email ID</th>
        <th>Phone</th>
        <th>Date Of Joining</th>
        <th>Department</th>
        <th>Manager ID</th>
    </tr>
    <tr>
        <td> {id}</td>
        <td>{name}</td>
        <td>{password}</td>
        <td>{emailId}</td>
        <td> {phone}</td>
        <td>{doj}</td>
        <td>{department}</td>
        <td>{managerId}</td>
    </tr>


        </Table>


      </>

    )
  }
}
