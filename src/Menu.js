import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <>
      <section id='header' className='header'>
        <div className='container-fluid  bg-light'>
        <div className='row'>
        <div className='col-10 mx-auto'>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink className="navbar-brand text-black border-bottom-none p-0" to={"/"}>Navbar</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <NavLink className="nav-item" to={"/"}>
                    Home
                  </NavLink>
                  <NavLink className="nav-item" to={"/about"}>
                    About
                  </NavLink>
                  <NavLink className="nav-item" to={"/service"}>
                    Service
                  </NavLink>
                  <NavLink className="nav-item" to={"/contact"}>
                    Contact
                  </NavLink>
                </ul>
              </div>
          </nav>
          
        </div>
        </div>
        </div>
        </section>
    </>
  );
}

export default Menu;