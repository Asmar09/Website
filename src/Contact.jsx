import React, { useState } from 'react';


const Contact = () => {

    const [data,setData] = useState({
        fullname: '',
        number: '',
        email: '',
        message: '',
    });
    const InputEvent = (event) =>{
        const {name,value} = event.target;
   setData((preVal) =>{
       return {
           ...preVal,
           [name] : value,
       }
   })
    }
    const formSubmit = (e) =>{
  e.preventDefault();
   alert(`My Name is ${data.fullname}. My phone number is ${data.number}. My email is ${data.email}. Here! what i want to say ${data.message}`);
    }
   return (
       <>
 <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
 </div>
 <div className="container contact_div">
     <div className="row">
         <div className="cold-md-6 col-10 mx-auto">
         <form onSubmit={formSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">FullName</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname"  value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
  </div> <br />
  <div className="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" name="number"  value={data.number} onChange={InputEvent} placeholder="Enter your number" />
  </div> <br />
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" name="email"  value={data.email} onChange={InputEvent} placeholder="name@example.com" />
  </div> <br />
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1"  name="message"  value={data.message} onChange={InputEvent} rows="3"></textarea>
  </div> <br />
  <div className="col-12">
  <button className="btn btn-outline-primary" type="submit">Submit form</button> 
  </div>
</form>
         </div>
     </div>
 </div>
       </>
   )
}


export default Contact;