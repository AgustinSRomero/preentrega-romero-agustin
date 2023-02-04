import {React, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Storage/cartContext';

function ItemDetail(props){
    const {name, price, img, altImg, type, id, stock} = props.product;
    const { checkStock } = useContext(cartContext);

    return (
    <div className='item-detail-card'>
        <div className='detail-img'>
            <img src={img} alt={altImg} />
        </div>
        <div>
            <div className='detail-text'>
                <h3>{name}</h3>
                <h4>${price}</h4>
                <h6>Modo de venta: {type}</h6>
                <p>Cantidad disponible: {stock}</p>
            </div>
            {props.isInCart?
                <div className='goToCart-button-container'>
                    <Link to={`/cart`}><Button class="go-to-cart-btn">Ir al Carrito</Button></Link> 
                </div>
            :   
                <div id='ItemDetail'>
                    <ItemCount onAddToCart={props.onAddToCart} stockCheck={checkStock(props.product)} buttonAdd={true}/>
                </div>
            }
            
            
        </div>
    </div>
  )
}

export default ItemDetail;