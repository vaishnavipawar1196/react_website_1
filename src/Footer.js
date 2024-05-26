import React from 'react';

function Footer() {

const currentYear = new Date().getFullYear();

  return (
    <>
    <section id='footer' className='footer'>
    <div className='bg-light p-3'>
        <p className='d-flex justify-content-center m-0'>&copy; {currentYear} &nbsp; <b> Vaishnavi Tech</b>.&nbsp; All rights reserved.</p>
    </div>
    </section>
    </>
  );
}

export default Footer;
