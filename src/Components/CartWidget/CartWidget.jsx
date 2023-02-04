import cart from '../../Icons/cart.svg'
import { useContext } from 'react';
import { cartContext } from '../../Storage/cartContext';

function CartWidget(){
    const {getTotalItemsInCart} = useContext(cartContext);
    const totalItems = getTotalItemsInCart();

    return(
        <div className='cart-widget-container'>
            <img src={cart} alt="Carrito de Compras" />
            
            {totalItems === 0?
                <span></span>
                :
                <span className='number-items-cart'>{totalItems}</span>
            }
            
        </div>
    )
}

export default CartWidget;