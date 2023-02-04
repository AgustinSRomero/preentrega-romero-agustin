import {React, useContext} from 'react'
import Button from '../Button/Button'
import ItemCount from '../ItemCount/ItemCount';
import { cartContext } from '../../Storage/cartContext';

function CartItem(props) {
    const {img, imgAlt, name, count, price, id} = props.product
    const { checkStock } = useContext(cartContext);

    let subtotal = count * price;

    return (
        <div>
            <img src={img} alt={imgAlt} />
            <h4>{name}</h4>
            <p>Cantidad: {count}</p>
            {/* <ItemCount buttonAdd={false} countCart={count} stockCheck={checkStock}></ItemCount> */}
            <p>Precio Unitario: ${price}</p>
            <strong><p>Subtotal: ${subtotal}</p></strong>
            
            <Button class="eliminate-button" onClick={() => props.removeItem(id)}>x</Button>          
        </div>
    )
}

export default CartItem