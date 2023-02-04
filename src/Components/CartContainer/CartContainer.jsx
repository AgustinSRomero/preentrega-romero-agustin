import React, {useContext} from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Storage/cartContext';
import CartItem from './CartItem';
import CheckoutForm from '../Form/CheckoutForm';
import Swal from 'sweetalert2'
import { createOrder } from '../../Services/firebase';


function CartContainer() {
    const {cart, removeItem, getTotalPriceCart, clearCart, getTotalItemsInCart} = useContext(cartContext);
    const emptyCart = getTotalItemsInCart();

    function handleCheckout(evt, userData){
        evt.peventDefault();
        const items = cart.map(({id, price, name, count}) => ({id, price, name, count}))
    
        const order = {
            buyer: userData,
            items: items,
            total: getTotalPriceCart(),
            date: new Date(),
        }
    
        createOrder(order).then((id) => {
            Swal.fire({
                icon: 'success',
                title: 'Gracias por su compra!',
                text: `Su orden fue generada con éxito, su código es: ${id}`,
            })
    
            clearCart()
        });
    }


    if(emptyCart === 0){
        return (
            <div className='no-products-carrito-container'>
                <h3>Agregue productos al carrito para finalizar tu compra!</h3>
                <Link to="/"><Button class="default-button">Ir a comprar</Button></Link>
            </div>
        )
    } else {
        return (
            <main className='main-container-' id='Cart-Container'>
                <div>
                    {cart.map((itemInCart) => {
                        return (<CartItem product={itemInCart} key={itemInCart.id} removeItem={removeItem}/>)
                    })}
                </div>
                <h4>Total: ${getTotalPriceCart()}</h4>
                <Button onClick={clearCart} class="default-button">Limpiar Carrito</Button>
                
                <CheckoutForm onCheckout={handleCheckout}></CheckoutForm>
            </main>
        ) 
    }
}

export default CartContainer;