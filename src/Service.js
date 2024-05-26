import React from 'react';
import Card from './Card';
import cdata from './card_data';

function Service() {
  return (
    <section className="head py-5" id="service">
      <div className='container-fluid'>
        <div className='row'>
        <div className='col-10 mx-auto'>
          <div className='row'>
            
               {cdata.map((val,ind) => {
                  return <Card 
                    key={ind}
                    title={val.title}
                    img_src={val.img}
                  />
                })}
            
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Service;