import React from 'react';

function Card(props) {
  return (
    <div className='col-md-4 my-3'>
    <div className="card">
        <img className="card-img-top" src={props.img_src} alt="Card image" style={{width:"100%",height: '233px'}} />
        <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
        <a href="#" className="btn btn-primary">See Profile</a>
        </div>
    </div>
    </div>
  );
}

export default Card;