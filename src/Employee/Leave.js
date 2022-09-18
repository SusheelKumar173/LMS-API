import axios from 'axios';
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Header from '../Header';

import "./style.css"

export default class Leave extends Component {

        constructor()
        {
            super();
            this.state={
                id:'',
                employeeId:'',
                number_Of_Days:'',
                start_Date:new Date().toISOString().slice(0,10),
                end_Date:new Date().toISOString().slice(0,10),
                leave_Type:'',
                status:'',
                reason:'',
                managerId:'',
                enddateerror:'',
                leavetypeerror:'',
                reasonerror:''
    
    
            }
             
          


      this.CreateLeave=this.CreateLeave.bind(this);
           
}


Fromstartdate=(e)=>
{
  this.setState({start_Date:e.target.value})
}

Toenddate=(e)=>
{
  this.setState({end_Date:e.target.value})
}


CreateLeave()
{

  if(this.state.start_Date == this.state.end_Date)
  {
    // alert("Start Date and end date should not be same ");
    this.setState({enddateerror:"Start Date & End Date Should not be same"});
    // window.location="/leave";
  }
  else if(this.state.leave_Type=="")
  {
    // alert("Please Select Leave Type");
    this.setState({leavetypeerror:"Please Select Leave Type"});
    // window.location="/leave";
  }
  else if(this.state.reason=="")
  {
    // alert("Please Enter Reason");
    this.setState({reasonerror:"Please Enter Reason for your leave"});
    // window.location="/leave";
  }
  else{
  let user = JSON.parse(localStorage.getItem('user-info'))
  console.warn(user.managerId)


    let url="https://localhost:44370/api/LeaveReqAllocation/Apply";

    var diff = Math.floor((Date.parse(this.state.end_Date) - Date.parse(this.state.start_Date)) / 86400000);
    diff=diff+1;

    axios.post(url,{
      employeeId:user.id,
      number_Of_Days:diff,
      start_Date:this.state.start_Date,
      end_Date:this.state.end_Date,
      leave_Type:this.state.leave_Type,
      status:this.state.status,
      reason:this.state.reason,
      managerId:user.managerId,
    }).then(response=>{
        alert("Leave Inserted.!! Successfully");
        alert(this.state.number_Of_Days);
    }).catch(error=>{
        alert(error);
    })

    window.location="/myleave";
  }
}


handleChange(ChangeObject)
{
    this.setState(ChangeObject);
}



  render() {
    let user = JSON.parse(localStorage.getItem('user-info'))



    return (
        <>
        <Header /> 
     <div className="col-sm-6 offset-sm-3">
       
          
            <h3 class="r">Apply/Request For Leave</h3>


            <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" value={user.id} disabled placeholder="name@example.com" name="employeeId" onChange={(e) => this.handleChange({ employeeId: e.target.value })} />
  <label for="floatingInput">Employee Id</label>
</div>

            {/* <div class="form-floating mb-3">
           
            <input type="text" class="form-control"   id="floatingInput"  name="employeeId" onChange={(e) => this.handleChange({ employeeId: e.target.value })}></input><br></br>
            <label for="floatingInput">Employee Id</label>
            </div> */}



{/* <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" name="number_Of_Days" onChange={(e) => this.handleChange({ number_Of_Days: e.target.value })} />
  <label for="floatingInput">Number Of Days</label>
</div> */}


            {/* <label>Number Of Days</label>
            <input type="text" className='form-control' name="number_Of_Days" onChange={(e) => this.handleChange({ number_Of_Days: e.target.value })}></input><br></br> */}

<div class="form-floating mb-3">
  <input type="date" class="form-control" id="floatingInput"  value={this.state.start_Date} placeholder="name@example.com" name="start_Date" onChange={this.Fromstartdate} min={this.state.start_Date}/>
  <label for="floatingInput">Start Date</label>
</div>

            {/* <label>start_Date</label>
            <input type="date" className='form-control' name="start_Date" onChange={(e) => this.handleChange({ start_Date: e.target.value })}></input><br></br> */}


<div class="form-floating mb-3">
  <input type="date" class="form-control" id="floatingInput" value={this.state.end_Date} placeholder="name@example.com" name="end_Date" onChange={this.Toenddate} min={this.state.start_Date} />
  <label for="floatingInput">End Date</label>
  <p class="e">{this.state.enddateerror}</p>
</div>

            {/* <label>end_Date</label>
            <input type="date" className='form-control' name="end_Date" onChange={(e) => this.handleChange({ end_Date: e.target.value })}></input><br></br> */}



<div class="form-floating mb-3">

            <select name="leave_Type" className='form-control' id="leave_Type" onChange={(e) => this.handleChange({ leave_Type: e.target.value })}>
               <option id="floatingInput">Choose Option</option>
                <option value="Sick leave" id="floatingInput">Sick Leave</option>
                <option value="Earned Leave" id="floatingInput">Earned Leave</option>
                <option value="Maternity Leave" id="floatingInput">Maternity Leave</option>
                <option value="Casual Leave" id="floatingInput">Casual Leave</option>
            </select>
            <label>Leave Type</label>
            <p class="e">{this.state.leavetypeerror}</p>
            <br></br>
            </div>

            
            {/* <label>leave_Type</label>
            <select name="leave_Type" className='form-control' id="leave_Type" onChange={(e) => this.handleChange({ leave_Type: e.target.value })}>
                <option value="Sick leave">Sick Leave</option>
                <option value="Earned Leave">Earned Leave</option>
                <option value="Maternity Leave">Maternity Leave</option>
            </select><br></br>
             */}
          



         <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" name="reason" onChange={(e) => this.handleChange({ reason: e.target.value })} required/>
  <label for="floatingInput">Reason</label>
  <p class="e">{this.state.reasonerror}</p>
</div>   



<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput"  value={user.managerId} disabled placeholder="name@example.com" name="managerId" onChange={(e) => this.handleChange({ managerId: e.target.value })} />
  <label for="floatingInput">Manager ID</label>
</div>   


            {/* <label>reason</label>
            <input type="text" className='form-control'  name=" reason />"  onChange={(e) => this.handleChange({ reason: e.target.value })}></input><br></br>
             */}
  {/* <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Email address</label>
</div>

<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
  <label for="floatingPassword">Password</label>
</div> */}
            
            <Button type="submit" onClick={this.CreateLeave}>Apply</Button>

     </div>
  
     </>
    )
  }
}
