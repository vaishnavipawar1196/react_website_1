import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <>
      <div className='app'>
        <Menu />
        <section id='content' className='content'>
          <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/service' element={<Service />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='*' element={<Home />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
