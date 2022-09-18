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
            password:'',
            emailId:'',
            passworderror:''

        }

        this.UpdatePassword=this.UpdatePassword.bind(this);
}

UpdatePassword()
{
    let emailId=this.state.emailId;
    let user = JSON.parse(localStorage.getItem('user-info'))

if(this.state.password=="")
{
    this.setState({passworderror:"Please Enter Password"})
}
else if(this.state.password.length <4)
{
    this.setState({passworderror:"Password Length must be greater than 4"})
}
else{
let url="https://localhost:44370/api/Employee/UpdatePassword/"+user.emailId;
axios.put(url,{
 password:this.state.password,

}).then(response=>{
    alert("Password Updated.!! Successfully..Please Login Again") 
}).catch(error=>{
    alert(error);
})

localStorage.clear();
window.location="/login";
}
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
      
        <div className="col-sm-6 offset-sm-3">
            <br></br><br></br>
        <h4 class="r">Change Password</h4>

<br></br>

        <div class="form-floating mb-3">
      
        <input type="email" className='form-control' id="floatingInput"  defaultValue={user.emailId} disabled name="email" onChange={(e) => this.handleChange({ emailId: e.target.value })}></input><br></br>
        <label for="floatingInput"><strong>Email Id</strong></label>
        </div>       
           

        <div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com" name="password" onChange={(e) => this.handleChange({ password: e.target.value })} />
  <label for="floatingInput">Password</label>
  <p class="e">{this.state.passworderror}</p>
</div>  
        
        {/* <div class="form-floating mb-3">
        <input type="password" class='form-control' id="floatingInput"  name="password" onChange={(e) => this.handleChange({ password: e.target.value })}></input><br></br>
        <label for="floatingInput">Password</label>
        </div>         */}

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
        <Button type="submit" onClick={this.UpdatePassword}>UPDATE</Button>

 </div>

 </>
    )
  }
}
