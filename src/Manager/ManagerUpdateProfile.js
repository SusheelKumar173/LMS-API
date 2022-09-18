import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Header from '../Header';
import { Navigate, useNavigate } from 'react-router-dom'

export default class ManagerUpdateProfile extends Component {
    
    constructor()
    {
        super();
        this.state={
            id:'',
            fullName:'',
            emailId:'',
            phone:''


        }

        this.UpdateManagerProfile=this.UpdateManagerProfile.bind(this);
}

UpdateManagerProfile()
{
    let id=this.state.id;
    let user = JSON.parse(sessionStorage.getItem('manager-info'))


let url="https://localhost:44370/api/Manager/Update/1"+user.id;
axios.put(url,{
    fullName:this.state.name,
    emailId:this.state.emailId,
    phone:this.state.phone, 
}).then(response=>{
    alert("Data Updated.!! Successfully..Please Login Again") 
}).catch(error=>{
    alert(error);
})

sessionStorage.clear();
window.location="/managerlogin";
}


handleChange(ChangeObject)
{
this.setState(ChangeObject);
}




  render() {

    let user = JSON.parse(sessionStorage.getItem('manager-info'))
    console.warn(user.fullName)
    return (
       
        <>

        <Header />

        <br></br><br></br><br></br>
        <div className="col-sm-6 offset-sm-3">
        <h4>Update Your Details</h4>
        
        <br></br><br></br>

        
           
           
        
   
        <label><strong>Name</strong> </label>
        <input type="text" className='form-control' defaultValue={user.fullName} name="name" onChange={(e) => this.handleChange({ fullName: e.target.value })}></input><br></br>


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
        <Button type="submit" onClick={this.UpdateManagerProfile}>UPDATE</Button>

 </div>

 </>
    )
  }
}
