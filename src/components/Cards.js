import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    
    <div className='cards'>
      <div className='cards2'>
      <h1>Welcome to the Ultimate Glamhair Experience!</h1>
      <br></br>
      <div className='cards__container'>
      <div className='cards__text'>
      At our company, we pride ourselves on meticulous craftsmanship and the highest standards in material selection. We offer premium, 100% natural human hair that is free from chemical alterations. Our commitment to quality ensures that we provide only the finest grade of superior hair.
       Our mission is to bring beauty and happiness to our customers, allowing everyone to enjoy their true love for perfect hair.
       </div>
      </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Our Recommendations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={require('./images/wig13.jpg')}
              text='Chic shoulder-length black wig with voluminous, cascading curls for a striking and glamorous look.'
              label='Exclusive'
              path='/kart'
              
            />
            <CardItem
              src={require('./images/wig6.jpg')}
              text='Blonde and long with beautiful waves for a timeless, elegant look.'
              label='Exclusive'
              path='/kart'
              
            />
            
            <CardItem
              src={require('./images/wig1a.jpg')}
              text='Medium-length black wig with big, luscious curls for a bold statement.'
              label='Exclusive'
              path='/kart'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('./images/wig3.png')}
              text='A mix of dark brown and light brown, very long with big curls for a striking, voluminous style'
              label='Exclusive'
              path='/kart'
            />
            <CardItem
              src={require('./images/wig8.jpg')} 
              text='Ginger, medium-length wig with big curls for a vibrant and playful appearance.'
              label='Exclusive'
              path='/products'
            />
            <CardItem
              src={require('./images/wig0.jpg')}
              text='Short blonde wig with straight hair for a chic, modern vibe.'
              label='Exclusive'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
