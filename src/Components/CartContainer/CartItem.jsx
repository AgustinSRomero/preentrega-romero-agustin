import {React} from 'react'
import Button from '../Button/Button'


function CartItem(props) {
    const {img, imgAlt, name, count, price, id} = props.product


    let subtotal = count * price;

    return (
        <div className='item-cart-container'>
            <img src={img} alt={imgAlt} className='cart-img'/>
            <div className='cart-text-container'>
                <h4>{name}</h4>
                <p>Cantidad: {count}</p>
                <p>Precio Unitario: ${price}</p>
            </div>
            <strong className='cart-subtotal'><p>Subtotal: ${subtotal}</p></strong>
            
            <Button class="eliminate-button" onClick={() => props.removeItem(id)}>x</Button>          
        </div>
    )
}

export default CartItem