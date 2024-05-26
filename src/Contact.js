import React, { useState } from 'react';

function Contact() {

  const [txt,setTxt] = useState({
    flname: "",
    num: "",
    email: "",
    msg: ""
  });

  const inputEvent = (event) => {
    const {name,value} = event.target;
    setTxt((preVal) => {
      return{
        ...preVal,
        [name]: value
      }
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`name: ${txt.flname}, number: ${txt.num}, email: ${txt.email}, msg: ${txt.msg}`);
  };

  return (
    <section className="head py-5" id="header">
      <div className='container-fluid'>
        <div className='row'>
        <div className='col-4 mx-auto'>
        <form onSubmit={formSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputName">Full Name</label>
            <input type="text" name='flname' value={txt.flname} onChange={inputEvent} className="form-control" id="exampleInputName" placeholder="Enter Full name here" />
          </div>
          <div className="form-group py-3">
            <label htmlFor="exampleInputNumber">Phone No.</label>
            <input type="number" name='num' value={txt.num} onChange={inputEvent} className="form-control" id="exampleInputNumber" placeholder="Enter phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" name='email' value={txt.email} onChange={inputEvent} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>         
          <div className="form-group py-3">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" name='msg' value={txt.msg} onChange={inputEvent} placeholder='Enter message' id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary my-3">Submit</button>
        </form>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;