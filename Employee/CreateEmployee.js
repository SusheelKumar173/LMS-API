import axios from 'axios';
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Header from '../Header';

export default class CreateEmployee extends Component {

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
    
            this.CreateNewEmployee=this.CreateNewEmployee.bind(this);
}

CreateNewEmployee()
{
    let url="https://localhost:44370/api/Employee/Employees";
    axios.post(url,{
        name:this.state.name,
        password:this.state.password,
        emailId:this.state.emailId,
        phone:this.state.phone,
        doj:this.state.doj,
        department:this.state.department,
        managerId:this.state.managerId
    }).then(response=>{
        alert("Data Inserted.!! Successfully");
    }).catch(error=>{
        alert(error);
    })

    window.location="/show";
}


handleChange(ChangeObject)
{
    this.setState(ChangeObject);
}



  render() {
    return (
        <>
        <Header /> 
     <div className="col-sm-6 offset-sm-3">
          
            <h4>Create Employee</h4>

            <label>Employee Name</label>
            <input type="text" className='form-control' name="name" onChange={(e) => this.handleChange({ name: e.target.value })}></input><br></br>


            <label>Employee PassWord :</label>
            <input type="password" className='form-control' name="password" onChange={(e) => this.handleChange({ password: e.target.value })}></input><br></br>



            <label>Employee Email :</label>
            <input type="email" className='form-control' name="email" onChange={(e) => this.handleChange({ emailId: e.target.value })}></input><br></br>



            <label>Employee Phone Number :</label>
            <input type="tel" className='form-control' name="number" onChange={(e) => this.handleChange({ phone: e.target.value })}></input><br></br>

            <label>Employee Date Of Joining :</label>
            <input type="date" className='form-control'  name=" date />"  onChange={(e) => this.handleChange({ doj: e.target.value })}></input><br></br><label>Employee Department :</label><select name="department" className='form-control' id="dept" onChange={(e) => this.handleChange({ department: e.target.value })}>
                <option value="ATM">ATM</option>
                <option value="IMS">IMS</option>
                <option value="GTM CLOUD">CLOUD</option>
            </select><br></br><label>Manager ID :</label><input type="text" className='form-control' name="managerid" onChange={(e) => this.handleChange({ managerId: e.target.value })}></input><br></br>
            <Button type="submit" onClick={this.CreateNewEmployee}>CREATE</Button>

     </div>
     </>
    )
  }
}
