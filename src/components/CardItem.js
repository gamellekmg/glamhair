import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/esm/Container';
function CardItem(props) {
  let button;
    if (props.pathbutton!=null ) {   button = <Container className='text-center'>
    <Button as={Link} to="/Book" variant="success">Pay Now</Button>
</Container>;    } 
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Wig_Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className={'cards__item__text '+props.classcenter}>{props.text}<br></br><br></br><b>{props.price}</b></h5>
            {button}
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
