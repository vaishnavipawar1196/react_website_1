import React from 'react';
import Common_section from './Common_section';
import home from '../src/images/home.svg';


function Home() {
  return (
    <Common_section 
      title='Welcome to Home' 
      btn_path='/service'
      name='Visit Now'
      img_src={home}
    />
  );
}
  
export default Home;