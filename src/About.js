import React from 'react';
import Common_section from './Common_section';
import about from '../src/images/about.jpg';


function About() {
  return (
    <Common_section 
      title = 'Welcome to About'
      btn_path='/contact'
      name='Get Started'
      img_src={about}
    />
  );
}
  
export default About;