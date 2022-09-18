import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Header from '../Header';
import { Navigate, useNavigate } from 'react-router-dom'

export default class UpdateEmployee extends Component {
    
    constructor()
    {
        super();
        this.state={
            id:'',
            name:'',
            emailId:'',
            phone:''


        }

        this.UpdateEmployee=this.UpdateEmployee.bind(this);
}

UpdateEmployee()
{
    let id=this.state.id;
    let user = JSON.parse(localStorage.getItem('user-info'))


let url="https://localhost:44370/api/Employee/Update/"+user.id;
axios.put(url,{
    name:this.state.name,
    emailId:this.state.emailId,
    phone:this.state.phone, 
}).then(response=>{
    alert("Data Updated.!! Successfully..Please Login Again") 
}).catch(error=>{
    alert(error);
})

localStorage.clear();
window.location="/login";
}


handleChange(ChangeObject)
{
this.setState(ChangeObject);
}




  render() {

    let user = JSON.parse(localStorage.getItem('user-info'))
    console.warn(user.name)
    return (
       
        <>

        <Header />

        <br></br><br></br><br></br>
        <div className="col-sm-6 offset-sm-3">
        <h4>Update Your Details</h4>
        
        <br></br><br></br>

        
           
           
        
   
        <label><strong>Name</strong> </label>
        <input type="text" className='form-control' defaultValue={user.name} name="name" onChange={(e) => this.handleChange({ name: e.target.value })}></input><br></br>


        {/* <label><strong>Password</strong> </label>
        <input type="password" className='form-control' defaultValue={user.password} name="password" onChange={(e) => this.handleChange({ password: e.target.value })}></input><br></br>
 */}
<br></br>

        <label><strong>Email ID</strong> </label>
        <input type="email" className='form-control'  defaultValue={user.emailId} name="email" onChange={(e) => this.handleChange({ emailId: e.target.value })}></input><br></br>

        <br></br>


        <label><strong>Phone Number</strong> </label>
        <input type="tel" className='form-control' defaultValue={user.phone} name="number" onChange={(e) => this.handleChange({ phone: e.target.value })}></input><br></br>
        <br></br>

        {/* <label>Employee Date Of Joining :</label>
        <input type="date" className='form-control'  name=" date />"  onChange={(e) => this.handleChange({ doj: e.target.value })}></input><br></br> */}
        
        {/* <label>Employee Department :</label><select name="department" className='form-control' id="dept" onChange={(e) => this.handleChange({ department: e.target.value })}>
            <option value="ATM">ATM</option>
            <option value="IMS">IMS</option>
            <option value="GTM CLOUD">CLOUD</option>
        </select><br></br>
         */}
        {/* <label>Manager ID :</label><input type="text" className='form-control' name="managerid" onChange={(e) => this.handleChange({ managerId: e.target.value })}></input><br></br> */}
        <Button type="submit" onClick={this.UpdateEmployee}>UPDATE</Button>

 </div>

 </>
    )
  }
}
