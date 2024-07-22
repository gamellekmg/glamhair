import React from 'react';
import './App.css';
import { Button } from './Button';
import './Herovid.css';

function Headervid({videoUrl,speech,btntxt}) {
  return (
    <div className='hero-container'>
      <video src={videoUrl} autoPlay loop muted />
      <h1>Glamhair</h1>
      <p>{speech}</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          {btntxt}
        </Button>
       
      </div>
    </div>
  );
}

export default Headervid;
