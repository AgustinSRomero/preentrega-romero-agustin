import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

function CardItem(props) {
  
  const {nombre, precio, img, altImg, id, stock} = props.product;

  return (
    <div className='card-item'>
      <img src={img} alt={altImg} />
      <p>{nombre}</p> 
      <p>${precio}</p>
      <ItemCount id={id} stock={stock}/>
      <Link to={`/item/${id}`}><button className='detail-button'>Ver Detalle</button></Link>
    </div>
  )
}

export default CardItem;