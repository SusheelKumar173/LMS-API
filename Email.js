import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dprbhyf', 'template_6ln48tz', form.current, 'MZgsu45yul8ZOPkTk')
      .then((result) => {
        //   console.log(result.text);
        alert("An Email has been sent to you.Please Check.!!")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>

<div className='col-sm-6 offset-sm-3 ' >

{/* <div class="form-floating mb-3">
      
      <input type="email" className='form-control' id="floatingInput"  name="email" onChange={(e) => this.handleChange({ emailId: e.target.value })}></input><br></br>
      <label for="floatingInput"><strong>Email Id</strong></label>
      <p class="e">{this.state.emailerror}</p>
      </div>      */}
      
      {/* <div class="form-floating mb-3">
    <input type="text" className='form-control' id="floatingInput" name="subject" />
    <label for="floatingInput">Subject</label>
    </div>  */}
<br></br><br></br><br></br>
<h4>Password Change Request</h4>
<br></br><br></br>

    <div class="form-floating mb-3">
    
      <input type="text" className='form-control' id="floatingInput" name="name" />
      <label for="floatingInput">Name</label>
      </div> 

      <div class="form-floating mb-3">
     
      <input type="email" className='form-control' id="floatingInput" name="email" />
      <label for="floatingInput">Email</label>
      </div>

      <button type='submit' className='btn btn-primary' value="Send">Send</button>
      </div>
    </form>
  );
};