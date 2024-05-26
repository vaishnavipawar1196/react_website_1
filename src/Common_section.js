import React from 'react';
import { NavLink } from 'react-router-dom';

function Common_section(props,img_src) {
  return (
    <section className="head" id="header">
      <div className='container-fluid'>
        <div className='row'>
        <div className='col-10 mx-auto'>
          <div className='row'>
            <div className='col-md-6 pt-5 d-flex flex-column justify-content-center'>
              <h2>{props.title} <br/> <span style={{color:'orange',}}>Vaishnavi Tech.</span> </h2>
              <p className='my-3'>We are the team of talented developer making websites.</p>
              <NavLink className='btn-get-started' to={props.btn_path}>{props.name}</NavLink>
            </div>
            <div className='col-md-6 pt-5 d-flex justify-content-center'>
              <img src={props.img_src} className='animated' style={{width: '100%'}} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
  
export default Common_section;