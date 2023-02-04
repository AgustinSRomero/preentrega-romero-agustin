import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  
  const {name, price, img, altImg, id} = props.product;

  return (
    <div className='card-item'>
      <img src={img} alt={altImg} />
      <p>{name}</p>
      <p>${price}</p>
      <Link to={`/item/${id}`}><button className='see-detail-button'>Ver Detalle</button></Link>
    </div>
  )
}

export default CardItem;