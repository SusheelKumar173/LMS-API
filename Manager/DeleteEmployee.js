import React, { Component } from 'react'
import Header from '../Header';

import axios from 'axios'

export default class DeleteEmployee extends Component {

    constructor()
    {
        super();
        this.state={
            id:''
        }
        this.DeleteEmployee=this.DeleteEmployee.bind(this);
    }
DeleteEmployee()
{
    let id=this.state.id;
    let url="https://localhost:44370/api/Employee/Delete/"+id;
    axios.delete(url).then(response=>{
        alert("Delete");
    }).catch(error=>{
        alert(error);
    })
    window.location="/managerdashboard";
}
handleChange(ChangeObject)
{
    this.setState(ChangeObject);
}

  render() {
    
    return (
      <>
      <Header /> 
      <div>DeleteEmployee <br></br>
        <label><strong>Employee ID</strong></label>
        <input type="text"  className='form-control' name="id" onChange={(e) => this.handleChange({ id: e.target.value })}></input><br></br>

      
<button onClick={this.DeleteEmployee}>Delete</button>
      </div>
      </>
    )
  }
}
