import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail(props){
    const {nombre, precio, img, altImg, tipo, id, stock} = props.product;
 
    return (
    <div className='item-detail-card'>
        <div className='detail-img'>
            <img src={img} alt={altImg} />
        </div>
        <div>
            <div className='detail-text'>
                <h3>{nombre}</h3>
                <h4>${precio}</h4>
                <h6>Modo de venta: {tipo}</h6>
                <p>Cantidad disponible: {stock}</p>
            </div>
            <div className='detail-buttons' id='ItemDetail'>
                <ItemCount id={id} stock={stock}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail;